import { useState, useEffect } from "react";
import {
	Link,
	useParams
} from "react-router-dom";
import axios from 'axios';

const View = () => {
	const [board, setBoard] = useState({
		title:'', 
		content:'',
		image:''
	});
	let { id } = useParams();
	console.log(id);

	useEffect(() => {
		axios.get(`http://34.64.253.101:8000/detail?id=${id}`)
			.then((res) => {
				// 성공 핸들링
				console.log(res.data);
				setBoard(res.data);
				setBoard({
					title: res.data[0].BOARD_TITLE,
					content: res.data[0].BOARD_CONTENT,
					image_path: res.data[0].IMAGE_PATH
				});
			})
			.catch((error) => {
				// 에러 핸들링
				console.log(error);
			});
	}, [id])



	return (
		<div>
			<h2>{board.title}</h2>
			<h2>본문</h2>
			<div>{board.content}</div>
			{board.image_path}
			{
				/* 이미지 있을 때 출력 */
			}
			{board.image_path && "attachment"
				<div >
					<img src="" alt="">
				</div>
			}
			<hr />
			<Link to="/" className="btn btn-secondary">목록</Link>
		</div>
	)
}
export default View;