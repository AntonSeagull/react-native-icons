

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const RiPlayReverseLine = (props: IconProps) => {

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
          <Path  d="M7.60558 12.0001L14 7.7371V16.263L7.60558 12.0001ZM4.62407 12.4161L15.2227 19.4818C15.4524 19.635 15.7629 19.5729 15.9161 19.3432C15.9708 19.261 16 19.1645 16 19.0658V4.93433C16 4.65818 15.7762 4.43433 15.5 4.43433C15.4013 4.43433 15.3048 4.46355 15.2227 4.5183L4.62407 11.584C4.39431 11.7372 4.33222 12.0477 4.4854 12.2774C4.52201 12.3323 4.56914 12.3795 4.62407 12.4161Z" />
        </G>
      </Svg>
    );
  }

