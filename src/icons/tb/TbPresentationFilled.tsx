

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbPresentationFilled = (props: IconProps) => {

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
          <Path  d="M21 3a1 1 0 0 1 0 2v9a3 3 0 0 1 -3 3h-5v2h2a1 1 0 0 1 0 2h-6a1 1 0 0 1 0 -2h2v-2h-5a3 3 0 0 1 -3 -3v-9a1 1 0 1 1 0 -2zm-4.293 4.293a1 1 0 0 0 -1.414 0l-2.293 2.292l-1.293 -1.292a1 1 0 0 0 -1.414 0l-3 3a1 1 0 0 0 0 1.414l.094 .083a1 1 0 0 0 1.32 -.083l2.293 -2.292l1.293 1.292a1 1 0 0 0 1.414 0l3 -3a1 1 0 0 0 0 -1.414" />
        </G>
      </Svg>
    );
  }

