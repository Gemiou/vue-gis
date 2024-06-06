const stationsTableColumns = () => {
  return [
    {
      name: "name",
      align: "left",
      label: "Station",
      field: "name",
      sortable: true,
    },
    {
      name: "location",
      label: "Location",
      field: "location",
      sortable: true,
      align: "left",
    },
    {
      name: "status",
      label: "Status",
      field: "status",
      sortable: true,
      align: "center",
    },
    {
      name: "operation",
      label: "Operation",
      field: "operation",
      align: "center",
      sortable: true,
    },
    {
      name: "db_ts",
      label: "Last DB ts",
      field: "db_ts",
      align: "center",
    },
    {
      name: "installation_day",
      align: "center",
      label: "Installation date",
      field: "installation_day",
    },
    {
      name: "actions",
      align: "center",
      label: "",
      field: "actions",
    },
  ];
};

export { stationsTableColumns };
