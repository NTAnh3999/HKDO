const body = document.querySelector("body");
const setting = document.getElementById("setting");
const report = document.getElementById("report");
window.addEventListener("load", function () {
	const markupSidebarFeature = `<div id="side__bar-feature">
	<div class="side__bar-content">
		<div class="side__bar-title position-relative mt-24">
			<p
				class="text-center fs-20 line-height-260 text__brand-accent fw-bold pt-8 pb-8"
			>
				Danh sách tính năng
			</p>
			<svg
				id="close__side-bar-feature"
				class="position-absolute top-50 translate-middle-y end-0 cursor-pointer"
				width="25"
				height="24"
				viewBox="0 0 25 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M12.5007 10.586L17.4507 5.63599L18.8647 7.04999L13.9147 12L18.8647 16.95L17.4507 18.364L12.5007 13.414L7.55072 18.364L6.13672 16.95L11.0867 12L6.13672 7.04999L7.55072 5.63599L12.5007 10.586Z"
					fill="#3279B7"
				/>
			</svg>
		</div>
		<p
			class="side__bar--sub-title mt-24 fs-14 line-height-224 fw-bold text__neutral-black-light px-8"
			style="margin-bottom: 0.4rem"
		>
			Dữ liệu cửa hàng
		</p>
		<ul class="list-unstyled overflow-hidden side__bar--sub-content">
			<li
				class="d-flex gap-3 align-items-center px-12 pt-8 pb-8 bg__neutral-white-light"
			>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M20 3H4C3.46957 3 2.96086 3.21071 2.58579 3.58579C2.21071 3.96086 2 4.46957 2 5V7C2.00211 7.34903 2.09552 7.69143 2.27095 7.99317C2.44638 8.29491 2.69772 8.54549 3 8.72V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V8.72C21.3023 8.54549 21.5536 8.29491 21.7291 7.99317C21.9045 7.69143 21.9979 7.34903 22 7V5C22 4.46957 21.7893 3.96086 21.4142 3.58579C21.0391 3.21071 20.5304 3 20 3ZM4 5H20V7H4V5ZM5 19V9H19V19H5Z"
						fill="#B2B2B2"
					/>
					<path d="M8 11H16V13H8V11Z" fill="#B2B2B2" />
				</svg>
				<span class="fs-14 line-height-224 text__neutral-black-light"
					>Sản phẩm</span
				>
			</li>
			<li
				class="d-flex gap-3 align-items-center px-12 pt-8 pb-8 bg__neutral-white-light"
			>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M20 3H4C3.46957 3 2.96086 3.21071 2.58579 3.58579C2.21071 3.96086 2 4.46957 2 5V7C2.00211 7.34903 2.09552 7.69143 2.27095 7.99317C2.44638 8.29491 2.69772 8.54549 3 8.72V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V8.72C21.3023 8.54549 21.5536 8.29491 21.7291 7.99317C21.9045 7.69143 21.9979 7.34903 22 7V5C22 4.46957 21.7893 3.96086 21.4142 3.58579C21.0391 3.21071 20.5304 3 20 3ZM4 5H20V7H4V5ZM5 19V9H19V19H5Z"
						fill="#B2B2B2"
					/>
					<path d="M8 11H16V13H8V11Z" fill="#B2B2B2" />
				</svg>
				<span class="fs-14 line-height-224 text__neutral-black-light"
					>Nhóm sản phẩm</span
				>
			</li>
			<li
				class="d-flex gap-3 align-items-center px-12 pt-8 pb-8 bg__neutral-white-light"
			>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M20 22H18V20C18 19.2044 17.6839 18.4413 17.1213 17.8787C16.5587 17.3161 15.7956 17 15 17H9C8.20435 17 7.44129 17.3161 6.87868 17.8787C6.31607 18.4413 6 19.2044 6 20V22H4V20C4 18.6739 4.52678 17.4021 5.46447 16.4645C6.40215 15.5268 7.67392 15 9 15H15C16.3261 15 17.5979 15.5268 18.5355 16.4645C19.4732 17.4021 20 18.6739 20 20V22ZM12 13C11.2121 13 10.4319 12.8448 9.7039 12.5433C8.97595 12.2417 8.31451 11.7998 7.75736 11.2426C7.20021 10.6855 6.75825 10.0241 6.45672 9.2961C6.15519 8.56815 6 7.78793 6 7C6 6.21207 6.15519 5.43185 6.45672 4.7039C6.75825 3.97595 7.20021 3.31451 7.75736 2.75736C8.31451 2.20021 8.97595 1.75825 9.7039 1.45672C10.4319 1.15519 11.2121 1 12 1C13.5913 1 15.1174 1.63214 16.2426 2.75736C17.3679 3.88258 18 5.4087 18 7C18 8.5913 17.3679 10.1174 16.2426 11.2426C15.1174 12.3679 13.5913 13 12 13ZM12 11C13.0609 11 14.0783 10.5786 14.8284 9.82843C15.5786 9.07828 16 8.06087 16 7C16 5.93913 15.5786 4.92172 14.8284 4.17157C14.0783 3.42143 13.0609 3 12 3C10.9391 3 9.92172 3.42143 9.17157 4.17157C8.42143 4.92172 8 5.93913 8 7C8 8.06087 8.42143 9.07828 9.17157 9.82843C9.92172 10.5786 10.9391 11 12 11Z"
						fill="#B2B2B2"
					/>
				</svg>
				<span class="fs-14 line-height-224 text__neutral-black-light"
					>Khách hàng / Nhà cung cấp</span
				>
			</li>
		</ul>
		<p
			class="side__bar--sub-title mt-24 fs-14 line-height-224 fw-bold text__neutral-black-light px-8"
			style="margin-bottom: 0.4rem"
		>
			Cấu hình cửa hàng
		</p>
		<ul class="list-unstyled overflow-hidden side__bar--sub-content">
			<li
				class="d-flex gap-3 align-items-center px-12 pt-8 pb-8 bg__neutral-white-light"
			>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M19.148 2.971C18.9698 2.67552 18.7185 2.43095 18.4183 2.26087C18.118 2.09079 17.779 2.00095 17.434 2H6.566C5.868 2 5.211 2.372 4.852 2.971L2.143 7.485C2.04926 7.64041 1.99981 7.8185 2 8C2.00399 8.96521 2.35949 9.89591 3 10.618V19C3 20.103 3.897 21 5 21H19C20.103 21 21 20.103 21 19V10.618C21.6405 9.89591 21.996 8.96521 22 8C22.0002 7.8185 21.9507 7.64041 21.857 7.485L19.148 2.971ZM19.984 8.251C19.9223 8.73382 19.6868 9.17764 19.3217 9.49952C18.9566 9.8214 18.4867 9.99931 18 10C16.897 10 16 9.103 16 8C16 7.932 15.975 7.872 15.961 7.808L15.981 7.804L15.22 4H17.434L19.984 8.251ZM10.819 4H13.18L13.993 8.065C13.958 9.137 13.08 10 12 10C10.92 10 10.042 9.137 10.007 8.065L10.819 4ZM6.566 4H8.78L8.02 7.804L8.04 7.808C8.025 7.872 8 7.932 8 8C8 9.103 7.103 10 6 10C5.51325 9.99931 5.04341 9.8214 4.67828 9.49952C4.31315 9.17764 4.07772 8.73382 4.016 8.251L6.566 4ZM10 19V16H14V19H10ZM16 19V16C16 14.897 15.103 14 14 14H10C8.897 14 8 14.897 8 16V19H5V11.858C5.321 11.941 5.652 12 6 12C6.56782 12.0003 7.12915 11.8794 7.6465 11.6454C8.16386 11.4114 8.6253 11.0696 9 10.643C9.733 11.475 10.807 12 12 12C13.193 12 14.267 11.475 15 10.643C15.3747 11.0696 15.8361 11.4114 16.3535 11.6454C16.8708 11.8794 17.4322 12.0003 18 12C18.348 12 18.679 11.941 19 11.858V19H16Z"
						fill="#B2B2B2"
					/>
				</svg>
				<span class="fs-14 line-height-224 text__neutral-black-light"
					>Thông tin cửa hàng</span
				>
			</li>
			<li
				class="d-flex gap-3 align-items-center px-12 pt-8 pb-8 bg__neutral-white-light"
			>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M19.148 2.971C18.9698 2.67552 18.7185 2.43095 18.4183 2.26087C18.118 2.09079 17.779 2.00095 17.434 2H6.566C5.868 2 5.211 2.372 4.852 2.971L2.143 7.485C2.04926 7.64041 1.99981 7.8185 2 8C2.00399 8.96521 2.35949 9.89591 3 10.618V19C3 20.103 3.897 21 5 21H19C20.103 21 21 20.103 21 19V10.618C21.6405 9.89591 21.996 8.96521 22 8C22.0002 7.8185 21.9507 7.64041 21.857 7.485L19.148 2.971ZM19.984 8.251C19.9223 8.73382 19.6868 9.17764 19.3217 9.49952C18.9566 9.8214 18.4867 9.99931 18 10C16.897 10 16 9.103 16 8C16 7.932 15.975 7.872 15.961 7.808L15.981 7.804L15.22 4H17.434L19.984 8.251ZM10.819 4H13.18L13.993 8.065C13.958 9.137 13.08 10 12 10C10.92 10 10.042 9.137 10.007 8.065L10.819 4ZM6.566 4H8.78L8.02 7.804L8.04 7.808C8.025 7.872 8 7.932 8 8C8 9.103 7.103 10 6 10C5.51325 9.99931 5.04341 9.8214 4.67828 9.49952C4.31315 9.17764 4.07772 8.73382 4.016 8.251L6.566 4ZM10 19V16H14V19H10ZM16 19V16C16 14.897 15.103 14 14 14H10C8.897 14 8 14.897 8 16V19H5V11.858C5.321 11.941 5.652 12 6 12C6.56782 12.0003 7.12915 11.8794 7.6465 11.6454C8.16386 11.4114 8.6253 11.0696 9 10.643C9.733 11.475 10.807 12 12 12C13.193 12 14.267 11.475 15 10.643C15.3747 11.0696 15.8361 11.4114 16.3535 11.6454C16.8708 11.8794 17.4322 12.0003 18 12C18.348 12 18.679 11.941 19 11.858V19H16Z"
						fill="#B2B2B2"
					/>
				</svg>
				<span class="fs-14 line-height-224 text__neutral-black-light"
					>Cấu hình tải khoản</span
				>
			</li>
			<li
				class="d-flex gap-3 align-items-center px-12 pt-8 pb-8 bg__neutral-white-light"
			>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M19 3H16.75C16.75 2.73478 16.6446 2.48043 16.4571 2.29289C16.2696 2.10536 16.0152 2 15.75 2H8.25C7.98478 2 7.73043 2.10536 7.54289 2.29289C7.35536 2.48043 7.25 2.73478 7.25 3H5C3.897 3 3 3.897 3 5V20C3 21.103 3.897 22 5 22H19C20.103 22 21 21.103 21 20V5C21 3.897 20.103 3 19 3ZM19 20H5V5H7V7H17V5H19V20Z"
						fill="#B2B2B2"
					/>
				</svg>

				<span class="fs-14 line-height-224 text__neutral-black-light"
					>Thông tin trên sổ kế toán</span
				>
			</li>
			<li
				class="d-flex gap-3 align-items-center px-12 pt-8 pb-8 bg__neutral-white-light"
			>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M21 8C20.798 8 16.15 8.029 12 10.008C7.85 8.029 3.202 8 3 8C2.73478 8 2.48043 8.10536 2.29289 8.29289C2.10536 8.48043 2 8.73478 2 9V18.883C2 19.0172 2.02701 19.15 2.0794 19.2735C2.1318 19.397 2.20852 19.5087 2.305 19.602C2.5 19.79 2.785 19.907 3.034 19.882L3.161 19.881C3.844 19.881 7.457 19.979 11.577 21.906C11.593 21.914 11.611 21.911 11.627 21.917C11.746 21.966 11.871 22 12 22C12.129 22 12.254 21.966 12.374 21.917C12.39 21.911 12.408 21.914 12.424 21.906C16.544 19.978 20.157 19.881 20.84 19.881L20.967 19.882C21.205 19.907 21.5 19.79 21.696 19.602C21.89 19.413 22 19.153 22 18.883V9C22 8.73478 21.8946 8.48043 21.7071 8.29289C21.5196 8.10536 21.2652 8 21 8ZM4 10.049C5.485 10.16 8.381 10.529 11 11.741V19.483C8 18.308 5.41 17.989 4 17.907V10.049ZM20 17.907C18.59 17.989 16 18.308 13 19.483V11.741C15.619 10.529 18.515 10.16 20 10.049V17.907Z"
						fill="#B2B2B2"
					/>
					<path
						d="M12 8C13.6569 8 15 6.65685 15 5C15 3.34315 13.6569 2 12 2C10.3431 2 9 3.34315 9 5C9 6.65685 10.3431 8 12 8Z"
						fill="#B2B2B2"
					/>
				</svg>

				<span class="fs-14 line-height-224 text__neutral-black-light"
					>Quản trị người dùng</span
				>
			</li>
			<li
				class="d-flex gap-3 align-items-center px-12 pt-8 pb-8 bg__neutral-white-light"
			>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M19.903 8.586C19.8556 8.47747 19.7892 8.37825 19.707 8.293L13.707 2.293C13.6217 2.21078 13.5225 2.14441 13.414 2.097C13.384 2.083 13.352 2.075 13.32 2.064C13.2363 2.03553 13.1492 2.01837 13.061 2.013C13.04 2.011 13.021 2 13 2H6C4.897 2 4 2.897 4 4V20C4 21.103 4.897 22 6 22H18C19.103 22 20 21.103 20 20V9C20 8.979 19.989 8.96 19.987 8.938C19.9821 8.84972 19.9649 8.76255 19.936 8.679C19.926 8.647 19.917 8.616 19.903 8.586ZM16.586 8H14V5.414L16.586 8ZM6 20V4H12V9C12 9.26522 12.1054 9.51957 12.2929 9.70711C12.4804 9.89464 12.7348 10 13 10H18L18.002 20H6Z"
						fill="#B2B2B2"
					/>
					<path
						d="M8 12H16V14H8V12ZM8 16H16V18H8V16ZM8 8H10V10H8V8Z"
						fill="#B2B2B2"
					/>
				</svg>
				<span class="fs-14 line-height-224 text__neutral-black-light"
					>Kết nối với hóa đơn điện tử</span
				>
			</li>
		</ul>
		<p
			class="side__bar--sub-title mt-24 fs-14 line-height-224 fw-bold text__neutral-black-light px-8"
			style="margin-bottom: 0.4rem"
		>
			Cài đặt và hỗ trợ
		</p>
		<ul class="list-unstyled overflow-hidden side__bar--sub-content">
			<li
				class="d-flex gap-3 align-items-center px-12 pt-8 pb-8 bg__neutral-white-light"
			>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M7 17C8.15196 16.9985 9.26816 16.5998 10.1604 15.8711C11.0526 15.1424 11.6663 14.1284 11.898 13H14V15H16V13H18V16H20V13H21V11H11.898C11.6663 9.87158 11.0526 8.85755 10.1604 8.1289C9.26816 7.40025 8.15196 7.00154 7 7C4.243 7 2 9.243 2 12C2 14.757 4.243 17 7 17ZM7 9C8.654 9 10 10.346 10 12C10 13.654 8.654 15 7 15C5.346 15 4 13.654 4 12C4 10.346 5.346 9 7 9Z"
						fill="#B2B2B2"
					/>
				</svg>
				<span class="fs-14 line-height-224 text__neutral-black-light"
					>Đổi mật khẩu</span
				>
			</li>
			<li
				class="d-flex gap-3 align-items-center px-12 pt-8 pb-8 bg__neutral-white-light"
			>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M20 22H4C3.73478 22 3.48043 21.8946 3.29289 21.7071C3.10536 21.5196 3 21.2652 3 21V3C3 2.73478 3.10536 2.48043 3.29289 2.29289C3.48043 2.10536 3.73478 2 4 2H20C20.2652 2 20.5196 2.10536 20.7071 2.29289C20.8946 2.48043 21 2.73478 21 3V21C21 21.2652 20.8946 21.5196 20.7071 21.7071C20.5196 21.8946 20.2652 22 20 22ZM19 20V4H5V20H19ZM8 9H16V11H8V9ZM8 13H16V15H8V13Z"
						fill="#B2B2B2"
					/>
				</svg>

				<span class="fs-14 line-height-224 text__neutral-black-light"
					>Mẫu hóa đơn</span
				>
			</li>
			<li
				class="d-flex gap-3 align-items-center px-12 pt-8 pb-8 bg__neutral-white-light"
			>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M7 17.013L11.413 16.998L21.045 7.45802C21.423 7.08003 21.631 6.57802 21.631 6.04402C21.631 5.51002 21.423 5.00802 21.045 4.63002L19.459 3.04402C18.703 2.28802 17.384 2.29202 16.634 3.04102L7 12.583V17.013ZM18.045 4.45802L19.634 6.04102L18.037 7.62302L16.451 6.03802L18.045 4.45802ZM9 13.417L15.03 7.44402L16.616 9.03002L10.587 15.001L9 15.006V13.417Z"
						fill="#B2B2B2"
					/>
					<path
						d="M5 21H19C20.103 21 21 20.103 21 19V10.332L19 12.332V19H8.158C8.132 19 8.105 19.01 8.079 19.01C8.046 19.01 8.013 19.001 7.979 19H5V5H11.847L13.847 3H5C3.897 3 3 3.897 3 5V19C3 20.103 3.897 21 5 21Z"
						fill="#B2B2B2"
					/>
				</svg>
				<span class="fs-14 line-height-224 text__neutral-black-light"
					>Đăng ký hóa đơn điện tử</span
				>
			</li>
			<li
				class="d-flex gap-3 align-items-center px-12 pt-8 pb-8 bg__neutral-white-light"
			>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M7 17.013L11.413 16.998L21.045 7.45802C21.423 7.08003 21.631 6.57802 21.631 6.04402C21.631 5.51002 21.423 5.00802 21.045 4.63002L19.459 3.04402C18.703 2.28802 17.384 2.29202 16.634 3.04102L7 12.583V17.013ZM18.045 4.45802L19.634 6.04102L18.037 7.62302L16.451 6.03802L18.045 4.45802ZM9 13.417L15.03 7.44402L16.616 9.03002L10.587 15.001L9 15.006V13.417Z"
						fill="#B2B2B2"
					/>
					<path
						d="M5 21H19C20.103 21 21 20.103 21 19V10.332L19 12.332V19H8.158C8.132 19 8.105 19.01 8.079 19.01C8.046 19.01 8.013 19.001 7.979 19H5V5H11.847L13.847 3H5C3.897 3 3 3.897 3 5V19C3 20.103 3.897 21 5 21Z"
						fill="#B2B2B2"
					/>
				</svg>
				<span class="fs-14 line-height-224 text__neutral-black-light"
					>Gia hạn sử dụng phần mềm</span
				>
			</li>
			<li
				class="d-flex gap-3 align-items-center px-12 pt-8 pb-8 bg__neutral-white-light"
			>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M12 2C6.486 2 2 6.486 2 12V16.143C2 17.167 2.897 18 4 18H5C5.26522 18 5.51957 17.8946 5.70711 17.7071C5.89464 17.5196 6 17.2652 6 17V11.857C6 11.5918 5.89464 11.3374 5.70711 11.1499C5.51957 10.9624 5.26522 10.857 5 10.857H4.092C4.648 6.987 7.978 4 12 4C16.022 4 19.352 6.987 19.908 10.857H19C18.7348 10.857 18.4804 10.9624 18.2929 11.1499C18.1054 11.3374 18 11.5918 18 11.857V18C18 19.103 17.103 20 16 20H14V19H10V22H16C18.206 22 20 20.206 20 18C21.103 18 22 17.167 22 16.143V12C22 6.486 17.514 2 12 2Z"
						fill="#B2B2B2"
					/>
				</svg>
				<span class="fs-14 line-height-224 text__neutral-black-light"
					>Liên hệ với người quản trị</span
				>
			</li>
			<li
				class="d-flex gap-3 align-items-center px-12 pt-8 pb-8 bg__neutral-white-light"
			>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g clip-path="url(#clip0_1644_1514)">
						<path
							d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20ZM11 15H13V17H11V15ZM13 13.355V14H11V12.5C11 12.2348 11.1054 11.9804 11.2929 11.7929C11.4804 11.6054 11.7348 11.5 12 11.5C12.2841 11.5 12.5623 11.4193 12.8023 11.2673C13.0423 11.1154 13.2343 10.8984 13.3558 10.6416C13.4773 10.3848 13.5234 10.0988 13.4887 9.81684C13.454 9.53489 13.34 9.26858 13.1598 9.04891C12.9797 8.82924 12.7409 8.66523 12.4712 8.57597C12.2015 8.48671 11.912 8.47587 11.6364 8.54471C11.3608 8.61354 11.1104 8.75923 10.9144 8.96482C10.7183 9.1704 10.5847 9.42743 10.529 9.706L8.567 9.313C8.68863 8.70508 8.96951 8.14037 9.38092 7.67659C9.79233 7.2128 10.3195 6.86658 10.9086 6.67332C11.4977 6.48006 12.1275 6.44669 12.7337 6.57661C13.3399 6.70654 13.9007 6.99511 14.3588 7.41282C14.8169 7.83054 15.1559 8.36241 15.3411 8.95406C15.5263 9.54572 15.5511 10.1759 15.4129 10.7803C15.2747 11.3847 14.9785 11.9415 14.5545 12.3939C14.1306 12.8462 13.5941 13.1779 13 13.355Z"
							fill="#B2B2B2"
						/>
					</g>
					<defs>
						<clipPath id="clip0_1644_1514">
							<rect width="24" height="24" fill="white" />
						</clipPath>
					</defs>
				</svg>
				<span class="fs-14 line-height-224 text__neutral-black-light"
					>Hướng dẫn sử dụng</span
				>
			</li>
			<li
				class="d-flex gap-3 align-items-center px-12 pt-8 pb-8 bg__neutral-white-light"
			>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M6 22H21V20H6.012C5.55 19.988 5 19.805 5 19C5 18.195 5.55 18.012 6.012 18H21V4C21 2.897 20.103 2 19 2H6C4.794 2 3 2.799 3 5V19C3 21.201 4.794 22 6 22ZM5 8V5C5 4.195 5.55 4.012 6 4H19V16H5V8Z"
						fill="#B2B2B2"
					/>
					<path d="M8 6H17V8H8V6Z" fill="#B2B2B2" />
				</svg>
				<span class="fs-14 line-height-224 text__neutral-black-light"
					>Tài liệu hướng dẫn</span
				>
			</li>
		</ul>
		<p
			class="side__bar--sub-title mt-24 fs-14 line-height-224 fw-bold text__neutral-black-light px-8"
			style="margin-bottom: 0.4rem"
		>
			Thao tác
		</p>
		<ul class="list-unstyled overflow-hidden side__bar--sub-content">
			<li
				class="d-flex gap-3 align-items-center px-12 pt-8 pb-8 bg__neutral-white-light"
			>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M11 15H13V9H16L12 4L8 9H11V15Z" fill="#B2B2B2" />
					<path
						d="M20 18H4V11H2V18C2 19.103 2.897 20 4 20H20C21.103 20 22 19.103 22 18V11H20V18Z"
						fill="#B2B2B2"
					/>
				</svg>
				<span class="fs-14 line-height-224 text__neutral-black-light"
					>Import đơn hàng</span
				>
			</li>
			<li
				class="d-flex gap-3 align-items-center px-12 pt-8 pb-8 bg__neutral-white-light"
			>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M5 20C5 20.5304 5.21071 21.0391 5.58579 21.4142C5.96086 21.7893 6.46957 22 7 22H17C17.5304 22 18.0391 21.7893 18.4142 21.4142C18.7893 21.0391 19 20.5304 19 20V8H21V6H17V4C17 3.46957 16.7893 2.96086 16.4142 2.58579C16.0391 2.21071 15.5304 2 15 2H9C8.46957 2 7.96086 2.21071 7.58579 2.58579C7.21071 2.96086 7 3.46957 7 4V6H3V8H5V20ZM9 4H15V6H9V4ZM8 8H17V20H7V8H8Z"
						fill="#B2B2B2"
					/>
					<path d="M9 10H11V18H9V10ZM13 10H15V18H13V10Z" fill="#B2B2B2" />
				</svg>
				<span class="fs-14 line-height-224 text__neutral-black-light"
					>Xóa đơn hàng</span
				>
			</li>
			<li
				class="d-flex gap-3 align-items-center px-12 pt-8 pb-8 bg__neutral-white-light"
			>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M20 3L22 7V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V7.004L4 3H20ZM20 9H4V19H20V9ZM12 10L16 14H13V18H11V14H8L12 10ZM18.764 5H5.236L4.237 7H19.764L18.764 5Z"
						fill="#B2B2B2"
					/>
				</svg>
				<span class="fs-14 line-height-224 text__neutral-black-light"
					>Bán buôn</span
				>
			</li>
			<li
				class="d-flex gap-3 align-items-center px-12 pt-8 pb-8 bg__neutral-white-light"
			>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M20 3L22 7V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V7.004L4 3H20ZM20 9H4V19H20V9ZM12 10L16 14H13V18H11V14H8L12 10ZM18.764 5H5.236L4.237 7H19.764L18.764 5Z"
						fill="#B2B2B2"
					/>
				</svg>
				<span class="fs-14 line-height-224 text__neutral-black-light"
					>Đơn hàng bán dự kiến</span
				>
			</li>
			<li
				class="d-flex gap-3 align-items-center px-12 pt-8 pb-8 bg__neutral-white-light"
			>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M20 3L22 7V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V7.004L4 3H20ZM20 9H4V19H20V9ZM12 10L16 14H13V18H11V14H8L12 10ZM18.764 5H5.236L4.237 7H19.764L18.764 5Z"
						fill="#B2B2B2"
					/>
				</svg>
				<span class="fs-14 line-height-224 text__neutral-black-light"
					>Chuyển kho</span
				>
			</li>
		</ul>
		<p
			class="side__bar--sub-title mt-24 fs-14 line-height-224 fw-bold text__neutral-black-light px-8"
			style="margin-bottom: 0.4rem"
		>
			Cửa hàng con
		</p>
		<ul class="list-unstyled overflow-hidden side__bar--sub-content">
			<li
				class="d-flex gap-3 align-items-center px-12 pt-8 pb-8 bg__neutral-white-light"
			>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M19 11H13V5H11V11H5V13H11V19H13V13H19V11Z"
						fill="#B2B2B2"
					/>
				</svg>
				<span class="fs-14 line-height-224 text__neutral-black-light"
					>Tạo cửa hàng con</span
				>
			</li>
			<li
				class="d-flex gap-3 align-items-center px-12 pt-8 pb-8 bg__neutral-white-light"
			>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M11.293 17.293L12.707 18.707L19.414 12L12.707 5.29297L11.293 6.70697L15.586 11H6V13H15.586L11.293 17.293Z"
						fill="#B2B2B2"
					/>
				</svg>
				<span class="fs-14 line-height-224 text__neutral-black-light"
					>Chi nhánh 1</span
				>
			</li>
			<li
				class="d-flex gap-3 align-items-center px-12 pt-8 pb-8 bg__neutral-white-light"
			>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M11.293 17.293L12.707 18.707L19.414 12L12.707 5.29297L11.293 6.70697L15.586 11H6V13H15.586L11.293 17.293Z"
						fill="#B2B2B2"
					/>
				</svg>
				<span class="fs-14 line-height-224 text__neutral-black-light"
					>Cửa hàng con 2</span
				>
			</li>
		</ul>
		<button
			class="mt-24 w-100 d-flex align-items-center py-10 px-12 bg-white border-0 mb-22"
		>
			<svg
				class="mr-12"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M16 13V11H7V8L2 12L7 16V13H16Z" fill="#DC2323" />
				<path
					d="M20 3H11C9.897 3 9 3.897 9 5V9H11V5H20V19H11V15H9V19C9 20.103 9.897 21 11 21H20C21.103 21 22 20.103 22 19V5C22 3.897 21.103 3 20 3Z"
					fill="#DC2323"
				/>
			</svg>
			<span class="fs-14 text__error-500 line-height-224">Đăng xuất</span>
		</button>
	</div>
</div>`;
	const markupSidebarReport = `<div id="side__bar-report">
	<div class="side__bar-content">
		<div class="side__bar-title position-relative mt-24">
			<p
				class="text-center fs-20 line-height-260 text__brand-accent fw-bold pt-8 pb-8"
			>
				Báo cáo
			</p>
			<svg
				id="close__side-bar-report"
				class="position-absolute top-50 translate-middle-y end-0 cursor-pointer"
				width="25"
				height="24"
				viewBox="0 0 25 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M12.5007 10.586L17.4507 5.63599L18.8647 7.04999L13.9147 12L18.8647 16.95L17.4507 18.364L12.5007 13.414L7.55072 18.364L6.13672 16.95L11.0867 12L6.13672 7.04999L7.55072 5.63599L12.5007 10.586Z"
					fill="#3279B7"
				/>
			</svg>
		</div>
		<p
			class="side__bar--sub-title mt-24 fs-14 line-height-224 fw-bold text__neutral-black-light px-8"
			style="margin-bottom: 0.4rem"
		>
			Báo cáo nội bộ
		</p>
		<ul class="list-unstyled overflow-hidden side__bar--sub-content">
			<li
				class="d-flex gap-3 align-items-center px-12 pt-8 pb-8 bg__neutral-white-light"
			>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M19.903 8.586C19.8556 8.47747 19.7892 8.37825 19.707 8.293L13.707 2.293C13.6217 2.21078 13.5225 2.14441 13.414 2.097C13.384 2.083 13.352 2.075 13.32 2.064C13.2363 2.03553 13.1492 2.01837 13.061 2.013C13.04 2.011 13.021 2 13 2H6C4.897 2 4 2.897 4 4V20C4 21.103 4.897 22 6 22H18C19.103 22 20 21.103 20 20V9C20 8.979 19.989 8.96 19.987 8.938C19.9821 8.84972 19.9649 8.76255 19.936 8.679C19.926 8.647 19.917 8.616 19.903 8.586ZM16.586 8H14V5.414L16.586 8ZM6 20V4H12V9C12 9.26522 12.1054 9.51957 12.2929 9.70711C12.4804 9.89464 12.7348 10 13 10H18L18.002 20H6Z"
						fill="#B2B2B2"
					/>
					<path
						d="M8 12H16V14H8V12ZM8 16H16V18H8V16ZM8 8H10V10H8V8Z"
						fill="#B2B2B2"
					/>
				</svg>
				<span class="fs-14 line-height-224 text__neutral-black-light"
					>Báo cáo quản trị</span
				>
			</li>
			<li
				class="d-flex gap-3 align-items-center px-12 pt-8 pb-8 bg__neutral-white-light"
			>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M13 6H15V17H13V6ZM17 3H19V17H17V3ZM9 9H11V17H9V9ZM4 19H20V21H4V19ZM5 12H7V17H5V12Z"
						fill="#B2B2B2"
					/>
				</svg>

				<span class="fs-14 line-height-224 text__neutral-black-light"
					>Báo cáo biểu đồ</span
				>
			</li>
			<li
				class="d-flex gap-3 align-items-center px-12 pt-8 pb-8 bg__neutral-white-light"
			>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M20 22H4C3.73478 22 3.48043 21.8946 3.29289 21.7071C3.10536 21.5196 3 21.2652 3 21V3C3 2.73478 3.10536 2.48043 3.29289 2.29289C3.48043 2.10536 3.73478 2 4 2H20C20.2652 2 20.5196 2.10536 20.7071 2.29289C20.8946 2.48043 21 2.73478 21 3V21C21 21.2652 20.8946 21.5196 20.7071 21.7071C20.5196 21.8946 20.2652 22 20 22ZM19 20V4H5V20H19ZM8 9H16V11H8V9ZM8 13H16V15H8V13Z"
						fill="#B2B2B2"
					/>
				</svg>

				<span class="fs-14 line-height-224 text__neutral-black-light"
					>Danh sách đơn thu</span
				>
			</li>
			<li
				class="d-flex gap-3 align-items-center px-12 pt-8 pb-8 bg__neutral-white-light"
			>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M20 22H4C3.73478 22 3.48043 21.8946 3.29289 21.7071C3.10536 21.5196 3 21.2652 3 21V3C3 2.73478 3.10536 2.48043 3.29289 2.29289C3.48043 2.10536 3.73478 2 4 2H20C20.2652 2 20.5196 2.10536 20.7071 2.29289C20.8946 2.48043 21 2.73478 21 3V21C21 21.2652 20.8946 21.5196 20.7071 21.7071C20.5196 21.8946 20.2652 22 20 22ZM19 20V4H5V20H19ZM8 9H16V11H8V9ZM8 13H16V15H8V13Z"
						fill="#B2B2B2"
					/>
				</svg>

				<span class="fs-14 line-height-224 text__neutral-black-light"
					>Danh sách đơn chi</span
				>
			</li>
		</ul>
		<p
			class="side__bar--sub-title mt-24 fs-14 line-height-224 fw-bold text__neutral-black-light px-8"
			style="margin-bottom: 0.4rem"
		>
			Báo cáo nhà thuốc
		</p>
		<ul class="list-unstyled overflow-hidden side__bar--sub-content">
			<li
				class="d-flex gap-3 align-items-center px-12 pt-8 pb-8 bg__neutral-white-light"
			>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g clip-path="url(#clip0_1682_7746)">
						<path
							d="M20 2C20.552 2 21 2.448 21 3V21C21 21.552 20.552 22 20 22H6C5.448 22 5 21.552 5 21V19H3V17H5V15H3V13H5V11H3V9H5V7H3V5H5V3C5 2.448 5.448 2 6 2H20ZM19 4H7V20H19V4ZM14 8V11H17V13H13.999L14 16H12L11.999 13H9V11H12V8H14Z"
							fill="#B2B2B2"
						/>
					</g>
					<defs>
						<clipPath id="clip0_1682_7746">
							<rect width="24" height="24" fill="white" />
						</clipPath>
					</defs>
				</svg>

				<span class="fs-14 line-height-224 text__neutral-black-light"
					>Sổ báo cáo nhà thuốc</span
				>
			</li>
			<li
				class="d-flex gap-3 align-items-center px-12 pt-8 pb-8 bg__neutral-white-light"
			>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M5 18V21.766L6.515 20.857L11.277 18H16C17.103 18 18 17.103 18 16V8C18 6.897 17.103 6 16 6H4C2.897 6 2 6.897 2 8V16C2 17.103 2.897 18 4 18H5ZM4 8H16V16H10.723L7 18.234V16H4V8Z"
						fill="#B2B2B2"
					/>
					<path
						d="M20 2H8C6.897 2 6 2.897 6 4H18C19.103 4 20 4.897 20 6V14C21.103 14 22 13.103 22 12V4C22 2.897 21.103 2 20 2Z"
						fill="#B2B2B2"
					/>
				</svg>

				<span class="fs-14 line-height-224 text__neutral-black-light"
					>Cập nhập theo dõi khiếu nại</span
				>
			</li>
			<li
				class="d-flex gap-3 align-items-center px-12 pt-8 pb-8 bg__neutral-white-light"
			>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M15 2.013H9V9H2V15H9V21.987H15V15H22V9H15V2.013Z"
						fill="#B2B2B2"
					/>
				</svg>

				<span class="fs-14 line-height-224 text__neutral-black-light"
					>Báo cáo tắt 777 - copy từ excel</span
				>
			</li>
		</ul>
		<p
			class="side__bar--sub-title mt-24 fs-14 line-height-224 fw-bold text__neutral-black-light px-8"
			style="margin-bottom: 0.4rem"
		>
			Báo cáo thuế
		</p>
		<ul class="list-unstyled overflow-hidden side__bar--sub-content">
			<li
				class="d-flex gap-3 align-items-center px-12 pt-8 pb-8 bg__neutral-white-light"
			>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M20 22H4C3.73478 22 3.48043 21.8946 3.29289 21.7071C3.10536 21.5196 3 21.2652 3 21V3C3 2.73478 3.10536 2.48043 3.29289 2.29289C3.48043 2.10536 3.73478 2 4 2H20C20.2652 2 20.5196 2.10536 20.7071 2.29289C20.8946 2.48043 21 2.73478 21 3V21C21 21.2652 20.8946 21.5196 20.7071 21.7071C20.5196 21.8946 20.2652 22 20 22ZM19 20V4H5V20H19ZM8 9H16V11H8V9ZM8 13H16V15H8V13Z"
						fill="#B2B2B2"
					/>
				</svg>

				<span class="fs-14 line-height-224 text__neutral-black-light"
					>Sổ kế toán TT88</span
				>
			</li>
			<li
				class="d-flex gap-3 align-items-center px-12 pt-8 pb-8 bg__neutral-white-light"
			>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M20 22H4C3.73478 22 3.48043 21.8946 3.29289 21.7071C3.10536 21.5196 3 21.2652 3 21V3C3 2.73478 3.10536 2.48043 3.29289 2.29289C3.48043 2.10536 3.73478 2 4 2H20C20.2652 2 20.5196 2.10536 20.7071 2.29289C20.8946 2.48043 21 2.73478 21 3V21C21 21.2652 20.8946 21.5196 20.7071 21.7071C20.5196 21.8946 20.2652 22 20 22ZM19 20V4H5V20H19ZM8 9H16V11H8V9ZM8 13H16V15H8V13Z"
						fill="#B2B2B2"
					/>
				</svg>

				<span class="fs-14 line-height-224 text__neutral-black-light"
					>Tờ khai thuế TT40, phụ lục 01-2</span
				>
			</li>
		</ul>
		<p
			class="side__bar--sub-title mt-24 fs-14 line-height-224 fw-bold text__neutral-black-light px-8"
			style="margin-bottom: 0.4rem"
		>
			Hoạt động kinh doanh
		</p>
		<ul class="list-unstyled overflow-hidden side__bar--sub-content mb-22">
			<li
				class="d-flex gap-3 align-items-center px-12 pt-8 pb-8 bg__neutral-white-light"
			>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M20 22H4C3.73478 22 3.48043 21.8946 3.29289 21.7071C3.10536 21.5196 3 21.2652 3 21V3C3 2.73478 3.10536 2.48043 3.29289 2.29289C3.48043 2.10536 3.73478 2 4 2H20C20.2652 2 20.5196 2.10536 20.7071 2.29289C20.8946 2.48043 21 2.73478 21 3V21C21 21.2652 20.8946 21.5196 20.7071 21.7071C20.5196 21.8946 20.2652 22 20 22ZM19 20V4H5V20H19ZM8 9H16V11H8V9ZM8 13H16V15H8V13Z"
						fill="#B2B2B2"
					/>
				</svg>

				<span class="fs-14 line-height-224 text__neutral-black-light"
					>Đơn hàng dự kiến mua</span
				>
			</li>
			<li
				class="d-flex gap-3 align-items-center px-12 pt-8 pb-8 bg__neutral-white-light"
			>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M20 22H4C3.73478 22 3.48043 21.8946 3.29289 21.7071C3.10536 21.5196 3 21.2652 3 21V3C3 2.73478 3.10536 2.48043 3.29289 2.29289C3.48043 2.10536 3.73478 2 4 2H20C20.2652 2 20.5196 2.10536 20.7071 2.29289C20.8946 2.48043 21 2.73478 21 3V21C21 21.2652 20.8946 21.5196 20.7071 21.7071C20.5196 21.8946 20.2652 22 20 22ZM19 20V4H5V20H19ZM8 9H16V11H8V9ZM8 13H16V15H8V13Z"
						fill="#B2B2B2"
					/>
				</svg>

				<span class="fs-14 line-height-224 text__neutral-black-light"
					>Đơn hàng online</span
				>
			</li>
		</ul>
	</div>
</div>`;
	body.insertAdjacentHTML("beforeend", markupSidebarFeature);
	body.insertAdjacentHTML("beforeend", markupSidebarReport);

	const closeSideBarFeature = document.getElementById(
		"close__side-bar-feature"
	);
	const closeSideBarReport = document.getElementById("close__side-bar-report");
	const sideBarFeatures = document.getElementById("side__bar-feature");
	const sideBarReport = document.getElementById("side__bar-report");

	function handleSideBarFeatures() {
		sideBarFeatures.classList.toggle("active");
	}

	function handleSideBarReport() {
		sideBarReport.classList.toggle("active");
	}
	setting.addEventListener("click", handleSideBarFeatures);
	closeSideBarFeature.addEventListener("click", handleSideBarFeatures);

	report.addEventListener("click", handleSideBarReport);
	closeSideBarReport.addEventListener("click", handleSideBarReport);
});
