

document.getElementById("userForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    var fullname = document.getElementById("fullname").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var salary = document.getElementById("salary").value;
    var dob = document.getElementById("dob").value;
    var position = document.getElementById("position").value;
    var description = document.getElementById("description").value;

      // Convert to number and format currency
            var currency = Number(salary).toLocaleString(
                'en-US',
                {
                    style: 'currency',
                    currency: 'USD'
                }
            );

            //  <div class="alert alert-success">  “When this button is clicked, close (remove) the nearest .alert 

    document.getElementById("result").innerHTML = `

    <div class="alert alert-success">
        <button type="button" class="btn-close position-absolute 
        top-0 end-0 m-3" data-bs-dismiss="alert"></button>
      
       
            <h5 class="text-primary">Submit Result Information</h5>
            <p><strong>Full Name:</strong> ${fullname}</p>
            <p><strong>Gender:</strong> ${gender}</p>
            <p><strong>Salary:</strong> ${currency}</p>
            <p><strong>Date Of Birth:</strong> ${dob}</p>
            <p><strong>Position:</strong> ${position}</p>
            <p><strong>Description:</strong> ${description}</p>
        </div>
    `;
});