import React from 'react';

const About = ({ data }) => {
    return (
        <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-semibold mb-8 text-text-main"><span className="text-primary">#</span>about-me</h2>
            <p className="text-secondary leading-relaxed mb-12 max-w-4xl">{data.bio}</p>

            <div className="mb-20">
                <h3 className="text-2xl font-semibold mb-8 text-text-main"><span className="text-primary">#</span>skills</h3>
                <div className="space-y-8">
                    {Object.entries(data.skills).map(([category, items]) => (
                        <div key={category}>
                            <h4 className="text-xl font-semibold text-text-main mb-4 capitalize border-b-2 border-primary/20 pb-2">{category}</h4>
                            <div className="flex flex-wrap gap-x-8 gap-y-4">
                                {items.map((skill) => (
                                    <div key={skill.name} className="flex items-center gap-3 text-secondary hover:text-text-main transition-colors duration-300 group">
                                        <skill.Icon className="w-8 h-8 text-secondary group-hover:text-primary transition-all duration-300 transform group-hover:scale-110" />
                                        <span>{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="text-2xl font-semibold mb-8 text-text-main"><span className="text-primary">#</span>interests</h3>
                <div className="flex flex-wrap gap-4">
                    {data.interests.map((interest, i) => (
                        <div key={i} className="border border-slate-700 p-3 rounded-lg bg-background-light hover:border-primary transition-colors duration-300">
                            <p className="text-secondary">{interest}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default About;