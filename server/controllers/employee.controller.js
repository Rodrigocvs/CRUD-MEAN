const Employee =  require('../models/employee');

const EmployeeCtrl = {};

EmployeeCtrl.getEmployees = async (req, res) =>{
    const employees = await Employee.find()
    res.json(employees);
}
EmployeeCtrl.createEmployee =  async  (req ,res  ) => {
   const empleyee =  new Employee(req.body);
     await empleyee.save();
    res.json({
        'status': 'Empleado guardado'
    });
};
EmployeeCtrl.getEmployee = async  (req , res ) =>  {
   
   const employee = await Employee.findById(req.params.id);
    res.json(employee);
};
EmployeeCtrl.editEmployee = async (req, res) => {
    const { id } = req.params;
    const employee = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    };
     await Employee.findByIdAndUpdate(id, {$set: employee}, {new: true});
    res.json({status: 'employee update'})
};

EmployeeCtrl.deleteEmployee = async (req , res) => {
   await Employee.findByIdAndRemove(req.params.id);
   res.json({
       status: 'empleado eliminado'
   });
}
module.exports = EmployeeCtrl;