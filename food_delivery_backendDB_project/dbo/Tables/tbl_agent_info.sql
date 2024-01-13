CREATE TABLE [dbo].[tbl_agent_info] (
    [agent_id]      NUMERIC (18)  IDENTITY (1001, 1) NOT NULL,
    [name]          VARCHAR (100) NULL,
    [email]         VARCHAR (100) NULL,
    [status]        VARCHAR (50)  NULL,
    [reg_date]      VARCHAR (MAX) NULL,
    [phone]         NUMERIC (12)  NULL,
    [photo_id_no]   VARCHAR (50)  NULL,
    [password]      VARCHAR (50)  NULL,
    [agent_type_cd] VARCHAR (50)  NULL,
    [agent_img]     VARCHAR (MAX) NULL,
    CONSTRAINT [PK_tbl_agent_info] PRIMARY KEY CLUSTERED ([agent_id] ASC),
    CONSTRAINT [FK_tbl_agent_info_tbl_agent_category] FOREIGN KEY ([agent_type_cd]) REFERENCES [dbo].[tbl_agent_category] ([agent_type_cd])
);

