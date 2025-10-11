

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const RxOpacity = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 15 15"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 7.5, 7.5)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M7.5 1.5C4.5 4.25 3 6.5 3 9C3 11.4853 5.01472 13.5 7.5 13.5C9.98528 13.5 12 11.4853 12 9C12 6.5 10.5 4.25 7.5 1.5ZM11 9C11 7.11203 9.97315 5.27195 7.5 2.87357C5.02686 5.27195 4 7.11203 4 9C4 10.933 5.567 12.5 7.5 12.5C9.433 12.5 11 10.933 11 9Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
        </G>
      </Svg>
    );
  }

