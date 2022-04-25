import ComicGrid from ".";
import { render } from "../TestUtils/render";


test("Render ComicGrid", () => {

    const comics = [
        {
            "urlImage": "https://comicvine.gamespot.com/a/uploads/original/5/58993/2645776-chamber_of_chills__13_cgc_8.5.jpg",
            "date": "2008-06-06 11:10:16",
            "name": "Chamber of Chills Magazine",
            "numberIssues": "13",
            "id": 6,
            "api_detail_url": "https://comicvine.gamespot.com/api/issue/4000-6/"
        },
        {
            "urlImage": "https://comicvine.gamespot.com/a/uploads/original/0/4/8-1488-7-1-fighting-fronts-.jpg",
            "date": "2008-06-06 11:10:16",
            "name": "Fighting Fronts!",
            "numberIssues": "3",
            "id": 7,
            "api_detail_url": "https://comicvine.gamespot.com/api/issue/4000-7/"
        },
        {
            "urlImage": "https://comicvine.gamespot.com/a/uploads/original/0/4/9-1489-8-1-tomb-of-terror.jpg",
            "date": "2008-06-06 11:10:16",
            "name": "Tomb of Terror",
            "numberIssues": "5",
            "id": 8,
            "api_detail_url": "https://comicvine.gamespot.com/api/issue/4000-8/"
        },
        {
            "urlImage": "https://comicvine.gamespot.com/a/uploads/original/0/4/10-1418-9-1-witches-tales.jpg",
            "date": "2008-06-06 11:10:05",
            "name": "Witches Tales",
            "numberIssues": "15",
            "id": 9,
            "api_detail_url": "https://comicvine.gamespot.com/api/issue/4000-9/"
        },
        {
            "urlImage": "https://comicvine.gamespot.com/a/uploads/original/0/4/11-1069-10-1-airboy-comics.jpg",
            "date": "2008-06-06 11:09:36",
            "name": "Airboy Comics",
            "numberIssues": "73",
            "id": 10,
            "api_detail_url": "https://comicvine.gamespot.com/api/issue/4000-10/"
        },
        {
            "urlImage": "https://comicvine.gamespot.com/a/uploads/original/0/4/12-1253-11-1-black-diamond-wester.jpg",
            "date": "2008-06-06 11:09:51",
            "name": "Black Diamond Western",
            "numberIssues": "39",
            "id": 11,
            "api_detail_url": "https://comicvine.gamespot.com/api/issue/4000-11/"
        },
        {
            "urlImage": "https://comicvine.gamespot.com/a/uploads/original/0/4/13-942-12-1-boy-comics.jpg",
            "date": "2008-06-06 11:09:30",
            "name": "Boy Comics",
            "numberIssues": "82",
            "id": 12,
            "api_detail_url": "https://comicvine.gamespot.com/api/issue/4000-12/"
        },
        {
            "urlImage": "https://comicvine.gamespot.com/a/uploads/original/0/4/14-1441-13-1-best-of-the-west.jpg",
            "date": "2008-06-06 11:10:07",
            "name": "Best of the West",
            "numberIssues": "5",
            "id": 13,
            "api_detail_url": "https://comicvine.gamespot.com/api/issue/4000-13/"
        },
        {
            "urlImage": "https://comicvine.gamespot.com/a/uploads/original/0/4/16-1223-15-1-tim-holt.jpg",
            "date": "2008-06-06 11:09:47",
            "name": "Tim Holt",
            "numberIssues": "32",
            "id": 15,
            "api_detail_url": "https://comicvine.gamespot.com/api/issue/4000-15/"
        },
        {
            "urlImage": "https://comicvine.gamespot.com/a/uploads/original/0/4/17-1497-16-1-journey-into-mystery.jpg",
            "date": "2008-06-06 11:10:16",
            "name": "Journey into Mystery",
            "numberIssues": "3",
            "id": 16,
            "api_detail_url": "https://comicvine.gamespot.com/api/issue/4000-16/"
        },
        {
            "urlImage": "https://comicvine.gamespot.com/a/uploads/original/0/4/18-1433-17-1-spy-cases.jpg",
            "date": "2008-06-06 11:10:07",
            "name": "Spy Cases",
            "numberIssues": "13",
            "id": 17,
            "api_detail_url": "https://comicvine.gamespot.com/api/issue/4000-17/"
        },
        {
            "urlImage": "https://comicvine.gamespot.com/a/uploads/original/0/4/21-1213-20-1-wild-western.jpg",
            "date": "2008-06-06 11:09:46",
            "name": "Wild Western",
            "numberIssues": "24",
            "id": 20,
            "api_detail_url": "https://comicvine.gamespot.com/api/issue/4000-20/"
        },
        {
            "urlImage": "https://comicvine.gamespot.com/a/uploads/original/0/4/22-989-23-1-blackhawk.jpg",
            "date": "2008-06-06 11:09:32",
            "name": "Blackhawk",
            "numberIssues": "57",
            "id": 23,
            "api_detail_url": "https://comicvine.gamespot.com/api/issue/4000-23/"
        },
        {
            "urlImage": "https://comicvine.gamespot.com/a/uploads/original/0/4/25-1399-26-1-blue-bolt-weird-tale.jpg",
            "date": "2008-06-06 11:10:02",
            "name": "Blue Bolt Weird Tales of Terror",
            "numberIssues": "115",
            "id": 26,
            "api_detail_url": "https://comicvine.gamespot.com/api/issue/4000-26/"
        },
        {
            "urlImage": "https://comicvine.gamespot.com/a/uploads/original/0/4/27-1457-28-1-g-i-joe.jpg",
            "date": "2008-06-06 11:10:09",
            "name": "G.I. Joe",
            "numberIssues": "16",
            "id": 28,
            "api_detail_url": "https://comicvine.gamespot.com/api/issue/4000-28/"
        },
        {
            "urlImage": "https://comicvine.gamespot.com/a/uploads/original/0/4/28-1503-29-1-uncanny-tales.jpg",
            "date": "2008-06-06 11:10:19",
            "name": "Uncanny Tales",
            "numberIssues": "3",
            "id": 29,
            "api_detail_url": "https://comicvine.gamespot.com/api/issue/4000-29/"
        },
        {
            "urlImage": "https://comicvine.gamespot.com/a/uploads/original/0/4/29-874-30-1-sparkler-comics.jpg",
            "date": "2008-06-06 11:09:18",
            "name": "Sparkler Comics",
            "numberIssues": "107",
            "id": 30,
            "api_detail_url": "https://comicvine.gamespot.com/api/issue/4000-30/"
        },
        {
            "urlImage": "https://comicvine.gamespot.com/a/uploads/original/0/4/30-1283-31-1-marvel-tales.jpg",
            "date": "2008-06-06 11:09:53",
            "name": "Marvel Tales",
            "numberIssues": "109",
            "id": 31,
            "api_detail_url": "https://comicvine.gamespot.com/api/issue/4000-31/"
        },
        {
            "urlImage": "https://comicvine.gamespot.com/a/uploads/original/0/4/31-1423-32-1-battle.jpg",
            "date": "2008-06-06 11:10:05",
            "name": "Battle",
            "numberIssues": "13",
            "id": 32,
            "api_detail_url": "https://comicvine.gamespot.com/api/issue/4000-32/"
        },
        {
            "urlImage": "https://comicvine.gamespot.com/a/uploads/original/0/4/32-1172-33-1-lone-ranger-the.jpg",
            "date": "2008-06-06 11:09:41",
            "name": "The Lone Ranger",
            "numberIssues": "52",
            "id": 33,
            "api_detail_url": "https://comicvine.gamespot.com/api/issue/4000-33/"
        },
        {
            "urlImage": "https://comicvine.gamespot.com/a/uploads/original/0/4/34-1534-35-1-space-adventures.jpg",
            "date": "2008-06-06 11:10:20",
            "name": "Space Adventures",
            "numberIssues": "3",
            "id": 35,
            "api_detail_url": "https://comicvine.gamespot.com/api/issue/4000-35/"
        },
        {
            "urlImage": "https://comicvine.gamespot.com/a/uploads/original/0/4/36-1446-37-1-forbidden-worlds.jpg",
            "date": "2008-06-06 11:10:08",
            "name": "Forbidden Worlds",
            "numberIssues": "11",
            "id": 37,
            "api_detail_url": "https://comicvine.gamespot.com/api/issue/4000-37/"
        },
        {
            "urlImage": "https://comicvine.gamespot.com/a/uploads/original/0/4/37-1379-38-1-operation-peril.jpg",
            "date": "2008-06-06 11:10:02",
            "name": "Operation: Peril",
            "numberIssues": "13",
            "id": 38,
            "api_detail_url": "https://comicvine.gamespot.com/api/issue/4000-38/"
        },
        {
            "urlImage": "https://comicvine.gamespot.com/a/uploads/original/0/4/38-1513-39-1-out-of-the-night.jpg",
            "date": "2008-06-06 11:10:19",
            "name": "Out of the Night",
            "numberIssues": "5",
            "id": 39,
            "api_detail_url": "https://comicvine.gamespot.com/api/issue/4000-39/"
        }
    ]

    render(
        <ComicGrid
            comics={comics}
        />
    );
});
