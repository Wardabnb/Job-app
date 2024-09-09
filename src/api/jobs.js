export async function getJobs({
  page,
  pageSize,
  title,
  location,
  salaryMin,
  salaryMax,
  jobType,
}) {
  const response = await fetch(
    `http://localhost:4000/jobs?page=${page}&pagesize=${pageSize}&title=${title}&location=${location}&salarymin=${salaryMin}&salarymax=${salaryMax}&jobType=${jobType}`
    // `http://localhost:4000/jobs?page=${page}&pagesize=${pageSize}`
  );
  const data = await response.json();
  return data;
}

export async function getOneJob(id) {
  const response = await fetch("http://localhost:4000/jobs/job/" + id);
  const data = await response.json();
  return data;
}
export async function addApplicant(data) {
  const { jobId, ...rest } = data;
  const response = await fetch(
    "http://localhost:4000/jobs/job/" + jobId + "/apply",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(rest),
    }
  );
}
