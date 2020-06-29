import React from 'react';
import axios from 'axios';


function howItWorks() {

    axios(
        {
            method: "GET",
            url: "https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/FrontEndCodeChallenge"
        }

    ).then(res => {
        console.log(res.data)
        return (
            <div>
                <h1>How It Works</h1>
                {res.data.sort((a, b) => a.stepNumber - b.stepNumber).map(steps => {
                    return (
                        <div>
                            <h1>{steps.stepNumber}</h1>
                            {steps.versionContent.map(name => {
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
    })
};

export default howItWorks;