

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiAbstract068 = (props: IconProps) => {

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
          <Path  d="m21,21v70.5c90.8555,0 164.5,73.6445 164.5,164.5s-73.6446,164.5-164.5,164.5v70.5h470v-70.5c-90.8555,0-164.5001-73.6446-164.5001-164.5s73.6446-164.5 164.5001-164.5v-70.5h-470zm235,43.475c18.8719,0 34.075,15.203 34.075,34.075v314.9c0,18.8719-15.2031,34.075-34.075,34.075s-34.075-15.2031-34.075-34.075v-314.9c0-18.8719 15.203-34.075 34.075-34.075zm-235,70.2062v242.6375c66.9945,0 121.3188-54.3243 121.3188-121.3188s-54.3243-121.3187-121.3188-121.3187zm470,0c-66.9945,0-121.3188,54.3243-121.3188,121.3187s54.3243,121.3188 121.3188,121.3188v-242.6375z" />
        </G>
      </Svg>
    );
  }

