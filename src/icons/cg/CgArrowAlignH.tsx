

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgArrowAlignH = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 12, 12)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M13 7H11V17H13V7Z" fill="currentColor" />
          <Path  d="M5.99996 7.75732L7.41418 9.17154L5.58572 11L9.99996 11V13L5.58579 13L7.41418 14.8284L5.99996 16.2426L1.75732 12L5.99996 7.75732Z" fill="currentColor" />
          <Path  d="M18 16.2427L16.5858 14.8285L18.4143 13H14V11L18.4142 11L16.5858 9.17161L18 7.75739L22.2427 12L18 16.2427Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

