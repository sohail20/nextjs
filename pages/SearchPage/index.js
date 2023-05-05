import React, { useState } from "react"
import TopNavBar from "../../component/TopNavbar"
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Avatar from '@mui/material/Avatar';

const messages = [
    {
        id: 1,
        primary: 'Brunch this week?',
        secondary: "I'll be in the neighbourhood this week. Let's grab a bite to eat",
        person: '/static/images/avatar/5.jpg',
    },
    {
        id: 2,
        primary: 'Birthday Gift',
        secondary: `Do you have a suggestion for a good present for John on his work
        anniversary. I am really confused & would love your thoughts on it.`,
        person: '/static/images/avatar/1.jpg',
    },
    {
        id: 3,
        primary: 'Recipe to try',
        secondary: 'I am try out this new BBQ recipe, I think this might be amazing',
        person: '/static/images/avatar/2.jpg',
    },
    {
        id: 4,
        primary: 'Yes!',
        secondary: 'I have the tickets to the ReactConf for this year.',
        person: '/static/images/avatar/3.jpg',
    },
    {
        id: 5,
        primary: "Doctor's Appointment",
        secondary: 'My appointment for the doctor was rescheduled for next Saturday.',
        person: '/static/images/avatar/4.jpg',
    },
    {
        id: 6,
        primary: 'Discussion',
        secondary: `Menus that are generated by the bottom app bar (such as a bottom
        navigation drawer or overflow menu) open as bottom sheets at a higher elevation
        than the bar.`,
        person: '/static/images/avatar/5.jpg',
    },
    {
        id: 7,
        primary: 'Summer BBQ',
        secondary: `Who wants to have a cookout this weekend? I just got some furniture
        for my backyard and would love to fire up the grill.`,
        person: '/static/images/avatar/1.jpg',
    },
    {
        id: 8,
        primary: 'Addam BBQ',
        secondary: `Who wants to have a cookout this weekend? I just got some furniture
        for my backyard and would love to fire up the grill.`,
        person: '/static/images/avatar/1.jpg',
    },
];

const SearchPage = ({ handleClose }) => {
    const [search, setSearch] = useState("")
    return (
        <>
            <TopNavBar
                handleClose={handleClose}
                handleSearch={(e) => {
                    console.log("eeee", e)
                    setSearch(e)
                }}
            />
            <button
                type="button"
                onClick={() => {
                    throw new Error("Sentry Frontend Error");
                }}
            >
                Throw error
            </button>
            {messages
                .filter((e) => {
                    if (e.primary.includes(search) || search == "") return e
                }).sort(function (a, b) {
                    if (a.primary < b.primary) { return -1; }
                    if (a.primary > b.primary) { return 1; }
                    return 0;
                })
                .map(({ id, primary, secondary, person }) => {
                    return (
                        <React.Fragment key={id}>
                            {id === 1 && (
                                <ListSubheader sx={{ bgcolor: 'background.paper' }}>
                                    {primary[0].toUpperCase()}
                                </ListSubheader>
                            )}

                            {id === 3 && (
                                <ListSubheader sx={{ bgcolor: 'background.paper' }}>
                                    Yesterday
                                </ListSubheader>
                            )}

                            <ListItem button>
                                <ListItemAvatar>
                                    <Avatar alt="Profile Picture" src={person} />
                                </ListItemAvatar>
                                <ListItemText primary={primary} secondary={secondary} />
                            </ListItem>
                        </React.Fragment>
                    )
                })}
        </>
    )
}

export default SearchPage