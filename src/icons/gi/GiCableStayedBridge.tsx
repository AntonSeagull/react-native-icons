

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiCableStayedBridge = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 256, 256)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M113 41v446h30V41h-30zM95 60.35L18 114.9v22l77-54.5V60.35zm66 0V82.4L483.8 311H494v-14.7L161 60.35zM95 98.59L18 170.8v24.7l77-72.2V98.59zm66 0v24.71L361.2 311h26.4L161 98.59zm0 49.81v34.4L239.9 311h21.2L161 148.4zm-66 .1L18 273.6v34.3l77-125.1v-34.3zM18 329v30h77v-30H18zm143 0v30h333v-30H161z" />
        </G>
      </Svg>
    );
  }

