const { item } = require('../../config/memory')

exports.getAllItems = (req,res) => {
    res.json({item});
}

exports.addItem = (req,res) =>{
    const { title, description } = req.body;
    if (!title || !description) return res.status(400).json({
        error: "Missing Fileds: body should contain (title,description)"
    });

    item.push({
        title,
        description
    })

    res.status(201).json({
        message : "Item added",
        items : item
    })
}