

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrInsecure = (props: IconProps) => {

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
          <Path  fill="none" d="M7 6.919V6a4.724 4.724 0 015-5 4.724 4.724 0 015 5v5.052M12 23a7 7 0 10-7-7 7 7 0 007 7zm2.985-7h-5.97" strokeWidth="2" />
        </G>
      </Svg>
    );
  }

