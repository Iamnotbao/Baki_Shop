class ApiFeature {
    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr;
    }

   async search() {
        console.log(this.queryStr);
        const keyword = this.queryStr.keyword
            ? {
                name: {
                    $regex: this.queryStr.keyword,
                    $options: "i",
                },
            }
            : {};
        console.log(keyword);
        this.query = this.query.find({ ...keyword });
        return this;
    }

    filter() {
        const queryCopy = { ...this.queryStr };
        console.log(queryCopy);
        //Remove some fields
        const removeArr = ["keyword", "link", "title"];

        removeArr.forEach((key) => delete queryCopy[key]);
        console.log(queryCopy);
        //Filter for Price and Rating
        let queryStr = JSON.stringify(queryCopy);
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, key => `$${key}`);

        this.query = this.query.find(JSON.parse(queryStr));
        console.log(queryStr);
        return this;

    }
    async pagination(pages) {
        const currentPage = Number(this.queryStr.page) || 1;
        console.log("currentPage", currentPage);
        
        const skip = pages * (currentPage - 1);
        this.query = this.query.limit(pages).skip(skip);
        return this;
    }

}

module.exports = { ApiFeature };
