const Fuel = require("../Model/Fuel");

exports.AddFuel = async (req, res, next) => {
    const { fueltype, Quantity, user } = req.body;

    try {
        if (user === "admin") {
            const existingFuel = await Fuel.findOne({ fueltype });

            if (existingFuel) {
                console.log("Fuel type exists");
                existingFuel.Quantity += (1*Quantity);
                const updatedFuel = await existingFuel.save();
                res.status(200).json({ message: "Fuel quantity updated", updatedFuel });
            } else {
                console.log("Fuel type does not exist");
                const newFuel = new Fuel({
                    fueltype: fueltype,
                    Quantity: Quantity,
                });

                const savedFuel = await newFuel.save();
                res.status(201).json({ message: "Fuel added", savedFuel });
            }
        } else {
            res.status(500).json({ message: "You cannot add Fuel" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
