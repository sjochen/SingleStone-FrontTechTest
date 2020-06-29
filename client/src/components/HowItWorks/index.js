import React, { useState, useEffect } from 'react';
import axios from 'axios';


function HowItWorks() {

    const [results, setResults] = useState();



    useEffect(() => {
        axios(
            {
                method: "GET",
                url: "https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/FrontEndCodeChallenge"
            }

        ).then(res => {
            console.log(res.data)
            let item = res.data;
            setResults(item);
        })
    }, []);

    return (
        <div>
            <h1>How It Works</h1>
            {results && results.sort((a,b) => a - b).map(data => {
                return (
                    <div>
                        <h1>{data.stepNumber}</h1>
                        {data.versionContent.map(name => {
                            return (
                                <div>
                                    <h3>{name.title}</h3>
                                    <p>{name.body}</p>
                                </div>
                            )
                        })}
                    </div>
                )

            })}
        </div>
    )

};

export default HowItWorks;