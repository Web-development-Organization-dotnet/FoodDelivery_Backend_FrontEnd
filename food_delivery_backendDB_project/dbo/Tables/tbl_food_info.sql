CREATE TABLE [dbo].[tbl_food_info] (
    [food_id]          NUMERIC (18)  IDENTITY (1, 1) NOT NULL,
    [food_type_cd]     VARCHAR (50)  NULL,
    [food_name]        VARCHAR (50)  NULL,
    [food_description] VARCHAR (MAX) NULL,
    [food_qty]         NUMERIC (18)  NULL,
    [food_img]         VARCHAR (MAX) NULL,
    CONSTRAINT [PK_tbl_food_info] PRIMARY KEY CLUSTERED ([food_id] ASC),
    CONSTRAINT [FK_tbl_food_info_tbl_food_type] FOREIGN KEY ([food_type_cd]) REFERENCES [dbo].[tbl_food_type] ([food_type_cd])
);

