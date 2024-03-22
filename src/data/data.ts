import image2 from '../assets/images/image2.webp'
import image3 from '../assets/images/image3.webp'
import image4 from '../assets/images/image4.webp'

export const menuItems = [
    {
        title: 'Marketplace',
        href: 'marketplace',
        id: 1
    },
    {
        title: 'Collection',
        href: 'collection',
        id: 2
    },
    {
        title: 'Community',
        href: 'community',
        id: 3
    },
    {
        title: 'Artists',
        href: 'artists',
        id: 4
    },
    
    
]

export interface ICard {
    name: string;
    image: string;
    id: number;
}

export const cards = [
    {
        name: 'Surgeon, Josh Rife',
        image: image2,
        id: 1,
    },
    {
        name: 'Charge, Qi tiao yu',
        image: image3,
        id: 2,
    },
    {
        name: 'Cyberpunk Cocomo',
        image: image4,
        id: 3,
    },
    {
        name: 'Surgeon, Josh Rife',
        image: image2,
        id: 4,
    },
    {
        name: 'Charge, Qi tiao yu',
        image: image3,
        id: 5,
    },
    {
        name: 'Cyberpunk Cocomo',
        image: image4,
        id: 6,
    },
]

export const items = [ 
    {   
        id: 1,
        title: 'Explore',
        paragraphs: [
            {
                url: "https://github.com/",
                title: 'Art Sign In'
            },
            {
                url: "https://github.com/",
                title: 'Collectibles'
            },
            {
                url: "https://github.com/",
                title: 'Domain Name',
            },
            {
                url: "https://github.com/",
                title: 'Utility'
            },
            
        ]
    },
    {   
        id: 2,
        title: 'Statistics',
        paragraphs: [
            {
                url: "https://github.com/",
                title: 'Ranking'
            },
            {
                url: "https://github.com/",
                title: 'Collectibles'
            },
            {
                url: "https://github.com/",
                title: 'Activity',
            },          
        ]
    },
    {   
        id: 3,
        title: 'Company',
        paragraphs: [
            {
                url: "https://github.com/",
                title: 'About Us'
            },
            {
                url: "https://github.com/",
                title: 'Career'
            },
            {
                url: "https://github.com/",
                title: 'Support',
            },
            {
                url: "https://github.com/",
                title: 'Partners'
            },
            
        ]
    },
    {   
        id: 4,
        title: 'Resources',
        paragraphs: [
            {
                url: "https://github.com/",
                title: 'Help Center'
            },
            {
                url: "https://github.com/",
                title: 'Platform Status'
            },
            {
                url: "https://github.com/",
                title: 'Blog',
            },
        ]
    },
]