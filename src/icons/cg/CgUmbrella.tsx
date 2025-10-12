

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgUmbrella = (props: IconProps) => {

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
          <Path  d="M4 9C4 4.58172 7.58172 1 12 1C16.4183 1 20 4.58172 20 9V11H13.0187V20.5C13.0187 21.8807 11.8994 23 10.5187 23C9.13797 23 8.01868 21.8807 8.01868 20.5V17.8571H10.0187V20.5C10.0187 20.7761 10.2425 21 10.5187 21C10.7948 21 11.0187 20.7761 11.0187 20.5V11H4V9ZM12 3C15.3137 3 18 5.68629 18 9H6C6 5.68629 8.68629 3 12 3Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
        </G>
      </Svg>
    );
  }

