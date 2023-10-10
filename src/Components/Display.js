import { React, useEffect, useState } from "react";
import axios from "axios";
import Label from "./Label";
import Card from './Card'
import '../Css/Display.css'

function Display(props) {
  const [data, setData] = useState({ tickets: [], users: [] });
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.quicksell.co/v1/internal/frontend-assignment'
        );
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  let allPossibleKeys=[];

  const groupAndSortTickets = (grouping, ordering, tickets) => {
    let groupedTickets = {};
    switch (grouping) {
      case "Status":
        groupedTickets = groupByStatus(tickets);
        allPossibleKeys=["Todo","In progress","Backlog","Done","Cancelled",];
        break;
      case "User":
        groupedTickets = groupByUser(tickets);
        break;
      case "Priority":
        groupedTickets = groupByPriority(tickets);
        break;
      default:
        groupedTickets = groupByStatus(tickets);
    }
    // Sort each group of tickets based on the selected ordering criteria
    const sortedGroups = {};
    for (const groupKey in groupedTickets) {
      sortedGroups[groupKey] = sortTickets(ordering, groupedTickets[groupKey]);
    }

    return sortedGroups;
  };

  const groupByStatus = (tickets) => {
    const statusGroups = {};
    tickets.forEach((ticket) => {
      const status = ticket.status;
      if (!statusGroups[status]) {
        statusGroups[status] = [];
      }
      statusGroups[status].push(ticket);
    });
    return statusGroups;
  };

  const groupByUser = (tickets) => {
    const userGroups = {};
    tickets.forEach((ticket) => {
      const user = data.users.find((u) => u.id === ticket.userId);
      const userName = user ? user.name : "Unassigned";
      if (!userGroups[userName]) {
        userGroups[userName] = [];
      }
      userGroups[userName].push(ticket);
    });
    return userGroups;
  };

  const groupByPriority = (tickets) => {
    const priorityGroups = {};
    tickets.forEach((ticket) => {
      const priority = ticket.priority;
      if (!priorityGroups[priority]) {
        priorityGroups[priority] = [];
      }
      priorityGroups[priority].push(ticket);
    });
    return priorityGroups;
  };

  const sortTickets = (ordering, tickets) => {
    switch (ordering) {
      case "Priority":
        return tickets.slice().sort((a, b) => b.priority - a.priority); // Descending order
      case "Title":
        return tickets.slice().sort((a, b) => a.title.localeCompare(b.title)); // Ascending order
      default:
        return tickets;
    }
  };

  const { Grouping, Ordering } = props; 
  const groupedAndSortedTickets = groupAndSortTickets(Grouping, Ordering, data.tickets);
  
  const missingGroupKeys = allPossibleKeys.filter(
    (key) => !Object.keys(groupedAndSortedTickets).includes(key)
  );

  return (
    <div className="App">
      <div className="card-container">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {Object.keys(groupedAndSortedTickets).map((groupKey) => (
              <div className="key" key={groupKey}>
                <Label
                  groupkey={groupKey}
                  numberOfElements={groupedAndSortedTickets[groupKey].length}
                />
                <Card
                  Type={props.Grouping}
                  ticket={groupedAndSortedTickets[groupKey]}
                  data={data}
                />
              </div>
            ))}
            {missingGroupKeys.map((missingKey) => (
              <Label
                key={missingKey}
                groupkey={missingKey}
                numberOfElements={0} // Set the count to 0 for missing keys
              />
            ))}
        </>
        )}
      </div>
    </div>
  );
}

export default Display;
