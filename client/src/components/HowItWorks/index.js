import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';


function HowItWorks() {

    const [results, setResults] = useState([]);

    // Used to organize the dates in order of most recent
    const sortDates = (dates) => dates.forEach((date) => date.versionContent.sort((a, b) => new Date(a.effectiveDate) < new Date(b.effectiveDate) ? 1 : -1));

    // Ordering the steps in the proper order
    const stepSorted = (steps) => {
        steps.sort((a, b) => (a.stepNumber - b.stepNumber));
    }

    // Only shows one of the steps based on the most recent date
    const versionContentSorter = (data) => {
        data.forEach(date => {
            date.versionContent = date.versionContent[0];
        })
    }


    useEffect(() => {

        // Making call to the API
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
            
            {/* Mapping over the results */}
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