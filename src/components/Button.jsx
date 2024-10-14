import React from 'react';
import PropTypes from 'prop-types';  // prop-types 패키지를 임포트

// 기본 버튼 컴포넌트
// variant = 'primary',  // 색상 선택을 위한 prop
const Button = (
    {
        label,
            type = 'button',
            onClick,
            disabled = false,
            size = 'md',           // 크기 선택을 위한 prop
            className = '',       // 추가적으로 외부에서 클래스 제공 가능
    }
) => {

    // 크기별 Tailwind 스타일
    const sizeStyles = {
        sm: '',
        md: 'btn-em-responsive',
        lg: '',
        xl: '',
    };

    // 결합된 클래스들
    // ${variantStyles[variant]}             /* 색상 */
    const buttonClass = `
    /* 크기 */
    ${sizeStyles[size]}         
    
    /* 색상 */
    bg-button-primary
    hover:bg-button-primary-hover
    
    /* 공통 스타일 */
    flex items-center justify-center
    font-semibold rounded-lg shadow-md    
    transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-opacity-75
    disabled:bg-gray-400 disabled:cursor-not-allowed
    
    /* 외부에서 전달된 클래스 */
    ${className}                          
  `;

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`btn ${buttonClass}`}
        >
            {label}
        </button>
    );
};

// PropTypes 정의
Button.propTypes = {
    label: PropTypes.string.isRequired, // label은 필수 문자열
    onClick: PropTypes.func, // onClick은 함수
    type: PropTypes.string, // type은 문자열
    disabled: PropTypes.bool, // disabled는 불리언
    className: PropTypes.string, // className은 문자열
    size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),  // 크기 선택 가능
};

export default Button;