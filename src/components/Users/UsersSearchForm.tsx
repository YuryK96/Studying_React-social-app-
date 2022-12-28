import React from "react";
import { useForm } from "react-hook-form";
import { FilterFormType } from "../../redux/users-reducer";

const UsersSearchForm: React.FC<UsersSearchFormPropsType> = React.memo(
  ({ onFilterChanged, isFetching }) => {
    const {
      register,
      handleSubmit,
      formState: { errors, isValid },
    } = useForm<FilterFormType>();
    const onSubmit = handleSubmit((data) => {
      onFilterChanged(data);
    });
    return (
      <div>
        <form onSubmit={onSubmit}>
          <input
            {...register("term", {
              maxLength: {
                value: 20,
                message: "Name shoud be shorter",
              },
            })}
            placeholder="Name"
          />
          {errors?.term && <p>{errors.term.message}</p>}

          <select
            {...register("friend", {
              required: "select one option",
            })}
          >
            <option value="null">All</option>
            <option value="true">Only followed</option>
            <option value="false">Only unfollowed</option>
          </select>

          <input
            disabled={!isValid || isFetching}
            value={"Find"}
            type="submit"
          />
        </form>
      </div>
    );
  }
);

export default UsersSearchForm;

type UsersSearchFormPropsType = {
  onFilterChanged: (filter: FilterFormType) => void;
  isFetching: boolean;
};
