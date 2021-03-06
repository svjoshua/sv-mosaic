import React, { useMemo } from "react";

import Checkbox from "../Checkbox.jsx";
import GridTd from "./GridTd.jsx";
import ButtonRow from "../ButtonRow.jsx";
import Button from "../Button.jsx";
import GridActionsButtonRow from "./GridActionsButtonRow.jsx";

function GridTr(props) {
	return (
		<tr>
			{
				props.bulkActions &&
				<GridTd key="_bulk">
					<Checkbox
						checked={props.checked === true}
						onClick={props.onCheckboxClick}
					/>
				</GridTd>
			}
			{
				props.columns.map(column => {
					return (
						<GridTd
							key={column.name}
							className={column.style === "bold" ? "bold" : undefined}
						>
							{props.row[column.name]}
						</GridTd>
					);
				})
			}
			<GridTd>
				<GridActionsButtonRow
					primaryActions={props.primaryActions}
					additionalActions={props.additionalActions}
					row={props.row}
				/>
			</GridTd>
		</tr>
	);
}

export default GridTr;