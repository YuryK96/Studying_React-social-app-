import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { FilterFormType } from "../../redux/users-reducer";
import { getFilter } from "../../redux/users-selectors";
import { Box, Button, FilledInput, FormControl, MenuItem, Select, TextField } from "@mui/material";
import  s from './Users.module.scss'
const UsersSearchForm: React.FC<UsersSearchFormPropsType> = React.memo(
  ({ onFilterChanged, isFetching }) => {
    const filter = useSelector(getFilter);
    const [filterTerm, setFilterTerm]= useState(filter.term)
    const [filterFriend, setFilterFriend]= useState(String(filter.friend))
    useEffect(()=>{setFilterTerm(filter.term)}
      ,[filter.term])
  useEffect(()=>{setFilterFriend(String(filter.friend))}
      ,[filter.friend])


    const {
      register,
      handleSubmit,
      formState: { errors, isValid },
    } = useForm<FilterFormType>();
    const onSubmit = handleSubmit((data) => {
      onFilterChanged(data);
    });

    return (
      <Box>
        <form onSubmit={onSubmit} >
          <Box sx={{display: "flex", flexWrap: "wrap"} } >
          <FormControl sx={{ m:1,   }} >
          <TextField
          size={"small"}


            {...register("term", {
              maxLength: {
                value: 20,
                message: "Name shoud be shorter",
              },
            })}
            onChange={ (e)=>{  setFilterTerm(e.target.value)  } }
            value= {filterTerm}
            placeholder="Name"

          />  </FormControl>
          {errors?.term && <p>{errors.term.message}</p>}
          <FormControl sx={{ m:1, }} size="small">
            <Box sx={{ display:"flex", } }>
          <Select
            sx={{minWidth:100}}
            {...register("friend", {
              required: "select one option",
            })}
            value={filterFriend}
          >
            <MenuItem onClick={()=>setFilterFriend("null")} value="null">All</MenuItem>
            <MenuItem onClick={()=>setFilterFriend("true")}  value="true">Only followed</MenuItem>
            <MenuItem onClick={()=>setFilterFriend("false")}  value="false">Only unfollowed</MenuItem>
          </Select>

          <Button type="submit" sx={{height: 39,marginLeft:2,}}
            disabled={!isValid || isFetching}

                  variant="outlined"
          > Find</Button> </Box></FormControl>
          </Box>
        </form>

      </Box>
    );
  }
);

export default UsersSearchForm;

type UsersSearchFormPropsType = {
  onFilterChanged: (filter: FilterFormType) => void;
  isFetching: boolean;
};
