/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex('Trainings').del()
  await knex('Trainings').insert([
    {
      id: 1,
      day: 'Monday',
      description:
        'Tempo/Easy run. A Tempo run is a steady, sustained effort. Contact Chris Arnold for further details on 027 403 6865.',
      location: 'North Hagley Park (opposite Ayr Street)',
    },
    {
      id: 2,
      day: 'Wednesday',
      description:
        'Speed work. This session involves interval training of various distances (200m to 2km repeats) with a recovery period in between each. Includes a warm up and warm down. Contact Don Greig for further details on 027 469 0828.',
      location: 'North Hagley Park (opposite Ayr Street)',
    },
    {
      id: 3,
      day: 'Thursday',
      description:
        'Easy run. Contact Chris Arnold for further details on 027 246 9372.',
      location: 'North Hagley Park (opposite Ayr Street)',
    },
    {
      id: 4,
      day: 'Saturday',
      description:
        'Speedwork or Parkrun. Depending on up-coming races, this session involves either longer interval repeats, a tempo run or we join in the Hagley Parkrun. On the last Saturday of each month DGRS runners don the pacers bibs for the Parkrun to help others achieve their PBs. Club-runners also take part in Athletics Canterbury inter-club cross country and road races held on Saturdays throughout the year. Contact Don Greig for further details on 027 469 0828.',
      location: 'North Hagley Park (opposite Ayr Street)',
    },
    {
      id: 5,
      day: 'Sunday',
      description: `Hill Run. Typically runners start from the Sign of the Takahe, run up the Harry Ell track and then along the Summit Road in either direction. Different groups usually run between 12-23km. We have a standing booking at the Sign of the Takahe where coffee, muffins and date scones are highly recommended. Contact Don Greig for further details on 027 469 0828.`,
      location: 'Dyers Pass Road by the Sign of the Takahe',
    },
  ])
}
