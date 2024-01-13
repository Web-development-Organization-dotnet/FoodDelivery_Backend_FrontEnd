CREATE TABLE [dbo].[tbl_food_type] (
    [food_type_cd]  VARCHAR (50)  NOT NULL,
    [food_type]     VARCHAR (50)  NULL,
    [type_desc]     VARCHAR (MAX) NULL,
    [food_category] VARCHAR (50)  NULL,
    CONSTRAINT [PK_tbl_food_type] PRIMARY KEY CLUSTERED ([food_type_cd] ASC)
);

