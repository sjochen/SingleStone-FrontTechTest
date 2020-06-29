import React from 'react';
import Steps from '../../steps.json';

function howItWorks() {
    return (
        <div>
            <h1>How It Works</h1>
            {Steps.map(steps => {
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
};

export default howItWorks;