import React from "react";
import "../styles/CardSection.css"

function CardSection()
{
        const cards = [
            {
                icon: "💻",
                title: "Courses",
                text: "Learn Programming And Tech Skills",
                link: "/courses"
            },
            {
                icon: "🚀",
                title: "Projects",
                text: "Build Real-World Applications",
                link: "/projects"
            },
            {
                icon: "👥",
                title: "Community",
                text: "Connect With Tech Enthusiasts",
                link: "/community"
            }
        ];

        return (
            <div className="content">
                {cards.map((cards,i) => (
                    <a href="{card.link}" className="card-link" key={i}>
                        <div className="card">
                            <div className="icon">{cards.icon}</div>
                            <h2>{cards.title}</h2>
                            <p>{cards.text}</p>
                        </div>
                    </a>
                ))}
            </div>
        );
}

export default CardSection;