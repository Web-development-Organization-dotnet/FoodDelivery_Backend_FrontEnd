CREATE TABLE [dbo].[tbl_delivery_info] (
    [sl_no]                      NUMERIC (10)    IDENTITY (1, 1) NOT NULL,
    [transaction_id]             NUMERIC (18)    NULL,
    [agent_id]                   NUMERIC (18)    NULL,
    [delivery_initiate_datetime] VARCHAR (MAX)   NULL,
    [delivered_datetime]         VARCHAR (MAX)   NULL,
    [delivery_status]            VARCHAR (50)    NULL,
    [comm_amt]                   NUMERIC (10, 2) NULL,
    CONSTRAINT [PK_tbl_delivery_info] PRIMARY KEY CLUSTERED ([sl_no] ASC),
    CONSTRAINT [FK_tbl_delivery_info_tbl_agent_info] FOREIGN KEY ([agent_id]) REFERENCES [dbo].[tbl_agent_info] ([agent_id])
);

