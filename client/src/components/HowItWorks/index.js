import React, { useState, useEffect } from 'react';
import axios from 'axios';


function HowItWorks() {

    const [results, setResults] = useState();

    const sortDates = (dates) => dates.forEach((date) => date.versionContent.sort((a, b) => new Date(a.effectiveDate) < new Date(b.effectiveDate) ? 1 : -1));

    const sorted = (steps) => {
        steps.sort((a, b) => (a.stepNumber - b.stepNumber));
    }

    const dataSorter = (data) => {
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
            sorted(item);
            dataSorter(item);
            setResults(item);

        })
    }, []);

    return (
        <div>
            <h1>How It Works</h1>
            {results && results.map(data => {
                return (
                    <div>
                        <h1>{data.stepNumber}</h1>
                        <div>
                            <h3>{data.versionContent.title}</h3>
                            <p>{data.versionContent.body}</p>
                        </div>
                    </div>
                )

            })}
        </div>
    )

};

export default HowItWorks;