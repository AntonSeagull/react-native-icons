

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgArrowsV = (props: IconProps) => {

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
          <Path  d="M7.75739 5.04077L9.1716 6.45498L11.0001 4.62652V10H13.0001V4.62661L14.8284 6.45498L16.2426 5.04077L12 0.798126L7.75739 5.04077Z" fill="currentColor" />
          <Path  d="M16.2426 18.9593L14.8284 17.545L13.0001 19.3734V14H11.0001V19.3735L9.1716 17.545L7.75739 18.9593L12 23.2019L16.2426 18.9593Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

