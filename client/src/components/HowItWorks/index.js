import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';


function HowItWorks() {

    const [results, setResults] = useState([]);

    const sortDates = (dates) => dates.forEach((date) => date.versionContent.sort((a, b) => new Date(a.effectiveDate) < new Date(b.effectiveDate) ? 1 : -1));

    const stepSorted = (steps) => {
        steps.sort((a, b) => (a.stepNumber - b.stepNumber));
    }

    const versionContentSorter = (data) => {
        data.forEach(date => {
            date.versionContent = date.versionContent[0];
        })
    }


    useEffect(() => {
        axios(
            {
                method: "GET",
                url: "https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/FrontEndCodeChallenge"
            }

        ).then(res => {
            console.log(res.data)
            let item = res.data;
            sortDates(item);
            stepSorted(item);
            versionContentSorter(item);
            setResults(item);

        })
    }, []);

    return (
        <div className="bod">
            <h1 id="title">How It Works</h1>
            {results.map((data,key) => {
                    return (
                        <div className="boxes" key={key}>
                            <h1 id="numb">0{data.stepNumber}</h1>
                            <div>
                                <h3 id="instruc">{data.versionContent.title}</h3>
                                <p>{data.versionContent.body}</p>
                            </div>
                        </div>
                    )

                })
            }
        </div>
    )

};

export default HowItWorks;