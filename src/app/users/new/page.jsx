'use client'
import {FloppyDisk} from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
} from "@heroui/react";


const NewUserPage = () => {

    const onSubmit=async(e)=>{
e.preventDefault()
const formData= new FormData(e.target)
const newUser=Object.fromEntries(formData.entries())
console.log(newUser);
const res= await fetch('http://localhost:8000/users',{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(newUser)

})
const createUser=await res.json()
    }
    return (
        <div>
            <h2>Create a New User</h2>
             <Form className="w-full max-w-96" onSubmit={onSubmit} >
      <Fieldset>
        <Fieldset.Legend>Profile Settings</Fieldset.Legend>
        <Description>Update your profile information.</Description>
        <FieldGroup>
          <TextField
            isRequired
            name="name"
            validate={(value) => {
              if (value.length < 3) {
                return "Name must be at least 3 characters";
              }
              return null;
            }}
          >
            <Label>Name</Label>
            <Input placeholder="Your Name" />
            <FieldError />
          </TextField>
          <TextField isRequired name="email" type="email">
            <Label>Email</Label>
            <Input placeholder="Your Email" />
            <FieldError />
          </TextField>
        
        </FieldGroup>
        <Fieldset.Actions>
          <Button type="submit">
            <FloppyDisk />
          Create User
          </Button>
          <Button type="reset" variant="secondary">
            Cancel
          </Button>
        </Fieldset.Actions>
      </Fieldset>
    </Form>
        </div>
    );
};

export default NewUserPage;