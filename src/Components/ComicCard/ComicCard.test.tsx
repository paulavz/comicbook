import { render } from "../TestUtils/render";
import ComicCard from ".";

test("Render ComicCard", () => {
    const comic = {
        "urlImage": "https://comicvine.gamespot.com/a/uploads/original/0/4/38-1513-39-1-out-of-the-night.jpg",
        "date": "2008-06-06 11:10:19",
        "name": "Out of the Night",
        "numberIssues": "5",
        "id": 39,
        "api_detail_url": "https://comicvine.gamespot.com/api/issue/4000-39/"
    }
    render(
        <ComicCard
            comic={comic}
        />
    );
});
