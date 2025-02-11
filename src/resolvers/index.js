import api, { route } from "@forge/api";
import Resolver from "@forge/resolver";
const resolver = new Resolver();
// Parent Task 1 and its subtasks
const parentTask1 = {
  fields: {
    assignee: {
      id: "630b72e58473817d7d03d114",
    },
    description: {
      content: [
        {
          content: [
            {
              text: "Implement core solution architecture and design for FlowSync app",
              type: "text",
            },
          ],
          type: "paragraph",
        },
      ],
      type: "doc",
      version: 1,
    },
    issuetype: {
      id: "10000",
    },

    project: {
      id: 10004,
    },
    summary:
      "Solution Design: Hackathon project to build AI-powered project planning tool",
  },
};

const subtaskA = {
  fields: {
    assignee: {
      id: "630b72e58473817d7d03d114",
    },
    description: {
      content: [
        {
          content: [
            {
              text: "Design system architecture,Define integration points,Define integration points",
              type: "text",
            },
          ],
          type: "paragraph",
        },
      ],
      type: "doc",
      version: 1,
    },
    issuetype: {
      id: "10006",
    },

    parent: {
      key: "PROJ-123", // Will be updated with actual parent key
    },
    project: {
      id: 10004,
    },
    summary: "Solution Architecture (P1)",
  },
};

const subtaskB = {
  fields: {
    assignee: {
      id: "630b72e58473817d7d03d114",
    },
    description: {
      content: [
        {
          content: [
            {
              text: "Design core user journeys, Create wireframes,Define Define interaction patterns",
              type: "text",
            },
          ],
          type: "paragraph",
        },
      ],
      type: "doc",
      version: 1,
    },
    issuetype: {
      id: "10006",
    },

    parent: {
      key: "PROJ-123", // Will be updated with actual parent key
    },
    project: {
      id: 10004,
    },
    summary: "User Flow Design (P1)",
  },
};

const subtaskC = {
  fields: {
    assignee: {
      id: "60fe6e77fc68c10069663b31",
    },
    description: {
      content: [
        {
          content: [
            {
              text: "Review architecture, Validate technical approach, Define ,Identify potential issues",
              type: "text",
            },
          ],
          type: "paragraph",
        },
      ],
      type: "doc",
      version: 1,
    },
    issuetype: {
      id: "10006",
    },

    parent: {
      key: "PROJ-123", // Will be updated with actual parent key
    },
    project: {
      id: 10004,
    },
    summary: "Technical Review (P2)",
  },
};

// Parent Task 2 and its subtasks
const parentTask2 = {
  fields: {
    assignee: {
      id: "630b72e58473817d7d03d114",
    },
    description: {
      content: [
        {
          content: [
            {
              text: "Implement core functionality of FlowSync application",
              type: "text",
            },
          ],
          type: "paragraph",
        },
      ],
      type: "doc",
      version: 1,
    },
    issuetype: {
      id: "10000",
    },

    project: {
      id: 10004,
    },
    summary: "Development Sprint",
  },
};

const subtaskD = {
  fields: {
    assignee: {
      id: "630b72e58473817d7d03d114",
    },
    description: {
      content: [
        {
          content: [
            {
              text: "Build essential UI components, Implement user interface, Ensure responsive design",
              type: "text",
            },
          ],
          type: "paragraph",
        },
      ],
      type: "doc",
      version: 1,
    },
    issuetype: {
      id: "10006",
    },

    parent: {
      key: "PROJ-123", // Will be updated with actual parent key
    },
    project: {
      id: 10004,
    },
    summary: "Frontend Development (P1)",
  },
};

const subtaskE = {
  fields: {
    assignee: {
      id: "712020:1d70a4ef-9048-4c46-a148-0e849def2165",
    },
    description: {
      content: [
        {
          content: [
            {
              text: "Develop core plan generation engine, Integrate with backend, Optimize performance",
              type: "text",
            },
          ],
          type: "paragraph",
        },
      ],
      type: "doc",
      version: 1,
    },
    issuetype: {
      id: "10006",
    },

    parent: {
      key: "PROJ-123", // Will be updated with actual parent key
    },
    project: {
      id: 10004,
    },
    summary: "AI Development (P0)",
  },
};

const subtaskF = {
  fields: {
    assignee: {
      id: "60fe6e77fc68c10069663b31",
    },
    description: {
      content: [
        {
          content: [
            {
              text: "Implement critical integrations, Ensure data security, Optimize backend performance",
              type: "text",
            },
          ],
          type: "paragraph",
        },
      ],
      type: "doc",
      version: 1,
    },
    issuetype: {
      id: "10006",
    },

    parent: {
      key: "PROJ-123", // Will be updated with actual parent key
    },
    project: {
      id: 10004,
    },
    summary: "Backend Development (P1)",
  },
};

// Parent Task 3 and its subtasks
const parentTask3 = {
  fields: {
    assignee: {
      id: "712020:1d70a4ef-9048-4c46-a148-0e849def2165",
    },
    description: {
      content: [
        {
          content: [
            {
              text: "Analyze impact and prepare final presentation",
              type: "text",
            },
          ],
          type: "paragraph",
        },
      ],
      type: "doc",
      version: 1,
    },
    issuetype: {
      id: "10000",
    },

    project: {
      id: 10004,
    },
    summary: "Impact Analysis & Demo",
  },
};

const subtaskG = {
  fields: {
    assignee: {
      id: "712020:1d70a4ef-9048-4c46-a148-0e849def2165",
    },
    description: {
      content: [
        {
          content: [
            {
              text: "Research market trends,Identify target audience, Analyze competition",
              type: "text",
            },
          ],
          type: "paragraph",
        },
      ],
      type: "doc",
      version: 1,
    },
    issuetype: {
      id: "10006",
    },

    parent: {
      key: "PROJ-123", // Will be updated with actual parent key
    },
    project: {
      id: 10004,
    },
    summary: "Market Analysis (P1)",
  },
};

const subtaskH = {
  fields: {
    assignee: {
      id: "630b72e58473817d7d03d114",
    },
    description: {
      content: [
        {
          content: [
            {
              text: "Evaluate user experience, Identify pain points, Suggest improvements",
              type: "text",
            },
          ],
          type: "paragraph",
        },
      ],
      type: "doc",
      version: 1,
    },
    issuetype: {
      id: "10006",
    },

    parent: {
      key: "PROJ-123", // Will be updated with actual parent key
    },
    project: {
      id: 10004,
    },
    summary: "User Benefits Analysis (P1)",
  },
};

const subtaskI = {
  fields: {
    assignee: {
      id: "60fe6e77fc68c10069663b31",
    },
    description: {
      content: [
        {
          content: [
            {
              text: "Highlight technical innovations,Explain integration points, Showcase key features",
              type: "text",
            },
          ],
          type: "paragraph",
        },
      ],
      type: "doc",
      version: 1,
    },
    issuetype: {
      id: "10006",
    },

    parent: {
      key: "PROJ-123", // Will be updated with actual parent key
    },
    project: {
      id: 10004,
    },
    summary: "Technical Highlights (P1)",
  },
};

const createJiraIssueUpdate = async (bodyData) => {
  try {
    console.log("Creating Jira issue:", bodyData.fields.summary);

    const response = await fetch(
      "https://xgao.atlassian.net/rest/api/3/issue",
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${Buffer.from(
            "Your email:Your API token"
          ).toString("base64")}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyData),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText);
    }

    const result = await response.json();
    console.log("Jira issue created successfully:", result);
    return result;
  } catch (error) {
    console.error("Error creating Jira issue:", error);
    throw error;
  }
};

const createAllJiraIssues = async (data) => {
  // Create Parent Task 1 and its subtasks
  try {
    // const parent1 = await createJiraIssueUpdate(parentTask1);
    const parent1 = await createJiraIssueUpdate({
      ...parentTask1,
      fields: {
        ...parentTask1.fields,
        project: {
          id: data.projectId,
        },
      },
    });

    console.log("Created Parent Task 1:", parent1.key);

    // Update and create subtasks for parent 1
    const subtasksForParent1 = [
      {
        ...subtaskA,
        fields: {
          ...subtaskA.fields,
          parent: { key: parent1.key },
          project: {
            id: data.projectId,
          },
        },
      },
      {
        ...subtaskB,
        fields: {
          ...subtaskB.fields,
          parent: { key: parent1.key },
          project: {
            id: data.projectId,
          },
        },
      },
      {
        ...subtaskC,
        fields: {
          ...subtaskC.fields,
          parent: { key: parent1.key },
          project: {
            id: data.projectId,
          },
        },
      },
    ];

    for (const subtask of subtasksForParent1) {
      try {
        await createJiraIssueUpdate(subtask);
      } catch (error) {
        console.error(
          `Error creating subtask ${subtask.fields.summary} for parent ${parent1.key}:`,
          error
        );
        // Continue with next subtask
      }
    }
  } catch (error) {
    console.error("Error creating Parent Task 1:", error);
    // Skip subtasks for this parent
  }

  // Create Parent Task 2 and its subtasks
  try {
    // const parent2 = await createJiraIssueUpdate(parentTask2);
    const parent2 = await createJiraIssueUpdate({
      ...parentTask2,
      fields: {
        ...parentTask1.fields,
        project: {
          id: data.projectId,
        },
      },
    });

    console.log("Created Parent Task 2:", parent2.key);

    // Update and create subtasks for parent 2
    const subtasksForParent2 = [
      {
        ...subtaskD,
        fields: {
          ...subtaskD.fields,
          parent: { key: parent2.key },
          project: {
            id: data.projectId,
          },
        },
      },
      {
        ...subtaskE,
        fields: {
          ...subtaskE.fields,
          parent: { key: parent2.key },
          project: {
            id: data.projectId,
          },
        },
      },
      {
        ...subtaskF,
        fields: {
          ...subtaskF.fields,
          parent: { key: parent2.key },
          project: {
            id: data.projectId,
          },
        },
      },
    ];

    for (const subtask of subtasksForParent2) {
      try {
        await createJiraIssueUpdate(subtask);
      } catch (error) {
        console.error(
          `Error creating subtask ${subtask.fields.summary} for parent ${parent2.key}:`,
          error
        );
        // Continue with next subtask
      }
    }
  } catch (error) {
    console.error("Error creating Parent Task 2:", error);
    // Skip subtasks for this parent
  }

  // Create Parent Task 3 and its subtasks
  try {
    // const parent3 = await createJiraIssueUpdate(parentTask3);
    const parent3 = await createJiraIssueUpdate({
      ...parentTask3,
      fields: {
        ...parentTask1.fields,
        project: {
          id: data.projectId,
        },
      },
    });

    console.log("Created Parent Task 3:", parent3.key);

    // Update and create subtasks for parent 3
    const subtasksForParent3 = [
      {
        ...subtaskG,
        fields: {
          ...subtaskG.fields,
          parent: { key: parent3.key },
          project: {
            id: data.projectId,
          },
        },
      },
      {
        ...subtaskH,
        fields: {
          ...subtaskH.fields,
          parent: { key: parent3.key },
          project: {
            id: data.projectId,
          },
        },
      },
      {
        ...subtaskI,
        fields: {
          ...subtaskI.fields,
          parent: { key: parent3.key },
          project: {
            id: data.projectId,
          },
        },
      },
    ];

    for (const subtask of subtasksForParent3) {
      try {
        await createJiraIssueUpdate(subtask);
      } catch (error) {
        console.error(
          `Error creating subtask ${subtask.fields.summary} for parent ${parent3.key}:`,
          error
        );
        // Continue with next subtask
      }
    }
  } catch (error) {
    console.error("Error creating Jira project:", error);
    throw error;
  }
};

const createJiraProject = async (data) => {
  try {
    console.log("Creating Jira project:", data);

    // 准备请求体数据（建议使用 JSON 对象然后 stringify）
    const bodyData = {
      assigneeType: "UNASSIGNED",
      // avatarId: 10200,
      // categoryId: 10120,
      description: data.submitData.name,
      // issueSecurityScheme: 10001,
      key: "FLOWREVO",
      name:
        `${data.submitData.name} - ${new Date().toLocaleString()}` ||
        "Sample Project",
      leadAccountId: "60fe6e77fc68c10069663b31",
      // notificationScheme: 10021,
      // permissionScheme: 10011,
      projectTemplateKey:
        "com.pyxis.greenhopper.jira:gh-simplified-kanban-classic",
      projectTypeKey: "software",
      url: "http://atlassian.com",
    };

    // 使用全局 fetch 发起请求（无需 require('node-fetch')）
    const response = await fetch(
      "https://xgao.atlassian.net/rest/api/2/project",
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${Buffer.from(
            "Your email:Your API token"
          ).toString("base64")}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyData),
      }
    );

    console.log(`Response: ${response.status} ${response.statusText}`);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText);
    }

    const projectResult = await response.json();
    console.log("Jira project created successfully:", projectResult);
    // Create jira ticket once jira project created
    const ticketData = {
      projectId: projectResult.id, // get project Id
      endDate: data.submitData.endDate,
    };

    const ticketResult = await createAllJiraIssues(ticketData);
    console.log("Jira ticket created successfully:", ticketResult);

    // return result
    return { project: projectResult, ticket: ticketResult };
  } catch (error) {
    console.error("Error creating Jira project:", error);
    throw error;
  }
};

// entire work flow
resolver.define("create-page", async (req) => {
  console.log("Received request:", req);

  try {
    // get data from payload
    if (!req.payload) {
      throw new Error("No payload received");
    }

    const data = req.payload;
    console.log("Processing data:", data);

    const pagePayload = {
      type: "page",
      title: `${req.payload.submitData.name} - ${new Date().toLocaleString()}`,
      space: { key: "~630b72e58473817d7d03d114" },
      body: {
        storage: {
          value: `
            <h1>${req.payload.submitData.name}</h1>
            <h2>Project BackGround</h2>
            <p>${req.payload.submitData.intro}</p>
            
            <h2>TimeLine</h2>
            <ul>
              <li><strong>Start Date：</strong>${req.payload.submitData.startdate}</li>
              <li><strong>End Date：</strong>${req.payload.submitData.enddate}</li>
            </ul>
            
            <h2>Team Members</h2>
            <p>${req.payload.submitData.team}</p>
          `,
          representation: "storage",
        },
      },
    };

    const createPageResponse = await api
      .asUser()
      .requestConfluence(route`/wiki/rest/api/content`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pagePayload),
      });

    if (!createPageResponse.ok) {
      throw new Error(await createPageResponse.text());
    }

    const pageData = await createPageResponse.json();
    //getAccountIdAndLog();

    //Create jira
    const jiraResponse = await createJiraProject(data);
    console.log("Jira response:", jiraResponse);
    return {
      success: true,
      data: {
        page: pageData,
        jiraResponse: jiraResponse,
      },
    };
  } catch (error) {
    console.error("Error in create-page:", error);
    return {
      success: false,
      error: error.message,
    };
  }
});

export const handler = resolver.getDefinitions();
