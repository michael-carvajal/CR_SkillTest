window.onload = e => {
    const mountain1 = {
        1: {
            date: "11 Jan 2024",
            trail: "Sunset Ridge Trail"
        },
        2: {
            date: "05 Apr 2024",
            trail: "Forest Creek Trail"
        },
        3: {
            date: "22 Aug 2024",
            trail: "River View Trail"
        },
        4: {
            date: "16 Nov 2024",
            trail: "Mountain Peak Trail"
        }
    };

    const mountain2 = {
        1: {
            date: "14 Mar 2024",
            trail: "Canyon Explorer Trail"
        },
        2: {
            date: "07 Jul 2024",
            trail: "Lakeside Trail"
        },
        3: {
            date: "28 Sep 2024",
            trail: "Wildflower Path"
        },
        4: {
            date: "02 Dec 2024",
            trail: "Ridge Run Trail"
        }
    };

    console.log(mountain1);
    console.log(mountain2);

    const events = document.querySelector('.events');
    console.log(events);

    function displaySchedule(mountainObj) {
        for (let key in mountainObj) {
            const { date, trail } = mountainObj[key]
            console.log(date, trail);
            const newTrailContainer = document.createElement('div')
            const dateEle = document.createElement('p')
            dateEle.innerText = date
            const trailEle = document.createElement('p')
            trailEle.innerText = trail
            newTrailContainer.append(dateEle, trailEle)
            newTrailContainer.className = 'ind-event'
            events.appendChild(newTrailContainer)

        }

    }
    displaySchedule(mountain1)
    const [domMount1, domMount2] = document.querySelectorAll('.mountains-container p')
    console.log(domMount1, domMount2);
    domMount1.addEventListener('click', e => {
        if (domMount1.className === 'active-mountain') {
            return
        }
        domMount1.className = 'active-mountain'
        domMount2.className = ''
        displaySchedule(mountain1)
    })
    domMount2.addEventListener('click', e => {
        if (domMount2.className === 'active-mountain') {
            return
        }
        domMount2.className = 'active-mountain'
        domMount1.className = ''
        displaySchedule(mountain2)
    })

    console.log('hello world')



}
