import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as Icons from "react-bootstrap-icons";
import axios from "axios";

const VolunteerUpdateForm = ({
  showVolunteerDetail,
  setShowVolunteerDetail,
  showVolunteerUpdateForm,
  setShowVolunteerUpdateForm,
}) => {
  const [selectedDate, setSelectedDate] = React.useState(null);
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");

  React.useEffect(() => {
    // Populate form fields with existing volunteer data
    if (showVolunteerUpdateForm) {
      setTitle(showVolunteerUpdateForm.title || "");
      setDescription(showVolunteerUpdateForm.description || "");
      setSelectedDate(
        showVolunteerUpdateForm.volunteeringDate
          ? new Date(showVolunteerUpdateForm.volunteeringDate)
          : null
      );
    }
  }, [showVolunteerUpdateForm]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = {
        title: title,
        description: description,
        volunteeringDate: selectedDate.toISOString().split("T")[0],
      };

      const response = await axios.put(
        `http://localhost:8800/api/volunteer/${showVolunteerUpdateForm._id}`,
        data
      );

      console.log("Post success:", response.data);
      // Handle success response

      // Clear form fields
      setTitle("");
      setDescription("");
      setSelectedDate(null);
    } catch (error) {
      console.error("Post error:", error);
      // Handle error
    }
  };

  const handleButtonClick = () => {
    setShowVolunteerDetail(showVolunteerUpdateForm);
    setShowVolunteerUpdateForm(false);
  };

  return (
    <div className="volunteerUpdateContainer">
      <button
        className="btn btn-light text-success d-flex gap-4 p-3"
        onClick={handleButtonClick}
      >
        <Icons.ArrowLeftCircleFill size={36} />
        <span className="fs-4 text-dark">Kembali</span>
      </button>

      <form
        className="d-flex flex-column gap-3 mt-3"
        onSubmit={handleFormSubmit}
      >
        <div className="mb-3 input-group-md">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Judul
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Judul Laporan"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3 input-group-lg">
          <div>
            <label htmlFor="datepicker" className="form-label">
              Tanggal Volunteering
            </label>
          </div>
          <DatePicker
            id="datepicker"
            selected={selectedDate}
            onChange={handleDateChange}
            className="form-control"
            placeholderText="Pilih Tanggal"
          />
        </div>
        <div className="form-floating">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            style={{ height: "200px" }}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <label htmlFor="floatingTextarea2">Deskripsi</label>
        </div>
        <div className="d-flex flex-row gap-2 justify-content-between">
          <button
            type="button"
            className="btn btn-danger align-items-center btn-lg d-flex gap-2"
          >
            <Icons.Trash2 size={25} />
            Hapus Laporan Ini
          </button>
          <button
            type="submit"
            className="btn btn-primary align-items-center btn-lg d-flex gap-2"
          >
            <Icons.ArrowClockwise size={25} />
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default VolunteerUpdateForm;
