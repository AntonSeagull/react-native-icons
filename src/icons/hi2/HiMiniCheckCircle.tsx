

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const HiMiniCheckCircle = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 20 20"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 10, 10)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" fillRule="evenodd" clipRule="evenodd" />
        </G>
      </Svg>
    );
  }

