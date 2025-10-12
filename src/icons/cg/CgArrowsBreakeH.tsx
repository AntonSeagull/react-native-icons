

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgArrowsBreakeH = (props: IconProps) => {

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
          <Path  d="M9.24268 7H11.2427V11.0001H11.2477V13.0001H11.2427V17H9.24268V13.0001L4.82846 13L6.65685 14.8284L5.24264 16.2426L1 12L5.24264 7.75732L6.65685 9.17154L4.82839 11H9.24264L9.24268 7Z" fill="currentColor" />
          <Path  d="M15.2527 7.00012H13.2527V11.0001H13.2477V13.0001H13.2527V17.0001H15.2527V13.0001L19.667 13L17.8385 14.8285L19.2527 16.2427L23.4954 12L19.2527 7.75739L17.8385 9.17161L19.6669 11H15.2527L15.2527 7.00012Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

