

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiControlEject = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 17 17"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 8.5, 8.5)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M8.474 2.719l-6.038 7.281h12.135l-6.097-7.281zM8.478 4.281l3.951 4.719h-7.865l3.914-4.719zM15 13v1h-13v-1h13z" />
        </G>
      </Svg>
    );
  }

