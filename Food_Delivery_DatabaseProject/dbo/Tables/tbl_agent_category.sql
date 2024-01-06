CREATE TABLE [dbo].[tbl_agent_category] (
    [agent_type_cd]    VARCHAR (50)   NOT NULL,
    [type_description] VARCHAR (MAX)  NULL,
    [comm_pct]         NUMERIC (5, 2) NULL,
    CONSTRAINT [PK_tbl_agent_category] PRIMARY KEY CLUSTERED ([agent_type_cd] ASC)
);

