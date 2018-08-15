import com.google.api.services.calendar.Calendar;

// ...

// Initialize Calendar service with valid OAuth credentials
Calendar service = new Calendar.Builder(httpTransport, jsonFactory, credentials)
    .setApplicationName("applicationName").build();

// Create a new calendar
com.google.api.services.calendar.model.Calendar calendar = new Calendar();
calendar.setSummary("calendarSummary");
calendar.setTimeZone("America/Los_Angeles");

// Insert the new calendar
Calendar createdCalendar = service.calendars().insert(calendar).execute();

System.out.println(createdCalendar.getId());
{
  "summary": "",

  event := &calendar.Event{
    Summary: "Google I/O 2015",
    Location: "800 Howard St., San Francisco, CA 94103",
    Description: "A chance to hear more about Google's developer products.",
    Start: &calendar.EventDateTime{
      DateTime: "2015-05-28T09:00:00-07:00",
      TimeZone: "America/Los_Angeles",
    },
    End: &calendar.EventDateTime{
      DateTime: "2015-05-28T17:00:00-07:00",
      TimeZone: "America/Los_Angeles",
    },
    Recurrence: []string{"RRULE:FREQ=DAILY;COUNT=2"},
    Attendees: []*calendar.EventAttendee{
      &calendar.EventAttendee{Email:"lpage@example.com"},
      &calendar.EventAttendee{Email:"sbrin@example.com"},
    },
  }

  calendarId := "primary"
  event, err = srv.Events.Insert(calendarId, event).Do()
  if err != nil {
    log.Fatalf("Unable to create event. %v\n", err)
  }
  fmt.Printf("Event created: %s\n", event.HtmlLink)
