"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { useAppContext } from "@/context/page";
import TableItems from "../tableItems/page";
import StepsCircle from "../steps-circle/page";

const nameSection = [
    'Account Dashboard',
    'Account Access & Security',
    'Account Management',
    'Billing & Payments',
    'Customer Support & Education',
    'Miscellaneous',
    'Outage',
    'Services',
]

export default function Table() {
    const {
        isLoadingContext,
        setIsLoadingContext,
        isErrorContext,
        setIsErrorContext,
        isTimerStartContext,
        setIsTimerStartContext,
        isTimerFinishedContext,
        setIsTimerFinishedContext
    } = useAppContext();

    const [data, setData] = useState(null); // Дані API
    const [error, setError] = useState(null); // Помилка запиту
    const [loading, setLoading] = useState(false); // Стан завантаження
    const [duration, setDuration] = useState(3000); // Початкове значення duration_minutes
    const [arrayData, setArrayData] = useState([]); // Дані для таблиці

    function calculateSectionChanges(sectionsStart, migrations) {

        const startMap = sectionsStart.reduce((acc, section) => {
            acc[section.name] = section.count;
            return acc;
        }, {});

        const sectionMap = {};

        migrations.forEach(({ name, countCame = 0, previousName }) => {
            if (!previousName || previousName === "") return;

            if (!sectionMap[name]) {
                sectionMap[name] = { name, in: 0, out: 0, start: startMap[name] || 0 };
            }
            sectionMap[name].in += countCame;

            if (!sectionMap[previousName]) {
                sectionMap[previousName] = { name: previousName, in: 0, out: 0, start: startMap[previousName] || 0 };
            }
            sectionMap[previousName].out += countCame;
        });

        return Object.values(sectionMap).map(section => ({
            name: section.name,
            start: section.start,
            in: section.in,
            out: section.out,
            final: section.start + section.in - section.out
        }));
    }

    function processData(data) {
        const sections_start = [];
        const migrations = [];

        data.current_sections_visitors_counts.forEach((item) => {
            let result = {
                name: item.section_name,
                count: item.visitors_count,
            }

            sections_start.push(result);
        })

        data.section_migrations_counts.forEach((item) => {
            let result = {
                name: item.section_name,
                countCame: item.migrating_visitors_count,
                previousName: item.previous_section_name,
            }

            migrations.push(result);
        })

        console.log(sections_start, 'sections_start');
        console.log(migrations, 'migrations');

        console.log(calculateSectionChanges(sections_start, migrations), 'result');
        setArrayData(calculateSectionChanges(sections_start, migrations));
        return { sections_start, migrations };
    }

    const fetchData = async () => {
        //Context
        setIsLoadingContext(true);
        setIsTimerStartContext(false);
        //
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`/api/section-report?duration_minutes=${duration}`);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const result = await response.json();
            console.log("Fetched data:", result);
            const processed = processData(result);
            setData(processed);
        } catch (err) {
            console.error("Error fetching data:", err.message);
            setError(err.message);
            setIsErrorContext(true);
        } finally {
            setLoading(false);

            setTimeout(() => {
                setIsTimerStartContext(true);
                setIsLoadingContext(false);
            }, 2000)
        }
    };

    useEffect(() => {
        if (isTimerFinishedContext) {
            fetchData();
            setDuration((prevDuration) => prevDuration - 1);
        }

        console.log(isTimerStartContext);
    }, [isTimerFinishedContext]);

    return (
        <>
            <div className={styles.table}>
                <input
                    type="number"
                    value={duration}
                    className={styles.tableInput}
                    onChange={(e) => setDuration(e.target.value)}
                />

                <button
                    className={styles.tableButton}
                    onClick={fetchData}
                    disabled={loading}
                >
                    {loading ? "Loading..." : "Fetch Data"}
                </button>
            </div>
            {
                isTimerStartContext && (
                    <div className={styles.tableItemsGrid}>
                        {arrayData.map((item, index) => {
                            return (
                                <div key={index}>
                                    <TableItems data={item}/>
                                </div>
                            )
                        })}
                    </div>
                )
            }
            {
                isLoadingContext && (
                    <div className={styles.tableItemsGrid}>
                        <StepsCircle text="Loading"/>
                    </div>
                )
            }
            {
                isErrorContext && (
                    <div className={styles.tableItemsGrid}>
                        <StepsCircle text="Error"/>
                    </div>
                )
            }
        </>
    );
}