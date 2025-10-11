

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbZoomPanFilled = (props: IconProps) => {

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
          <Path  d="M12 8a4 4 0 0 1 3.447 6.031l2.26 2.262a1 1 0 0 1 -1.414 1.414l-2.262 -2.26a4 4 0 0 1 -6.031 -3.447l.005 -.2a4 4 0 0 1 3.995 -3.8" />
          <Path  d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 1 1 -1.414 1.414l-1.293 -1.292l-1.293 1.292a1 1 0 0 1 -1.32 .083l-.094 -.083a1 1 0 0 1 0 -1.414z" />
          <Path  d="M19.293 9.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-2 2a1 1 0 0 1 -1.414 -1.414l1.292 -1.293l-1.292 -1.293a1 1 0 0 1 -.083 -1.32z" />
          <Path  d="M3.293 9.293a1 1 0 1 1 1.414 1.414l-1.292 1.293l1.292 1.293a1 1 0 0 1 .083 1.32l-.083 .094a1 1 0 0 1 -1.414 0l-2 -2a1 1 0 0 1 0 -1.414z" />
          <Path  d="M9.293 19.293a1 1 0 0 1 1.414 0l1.293 1.292l1.294 -1.292a1 1 0 0 1 1.32 -.083l.094 .083a1 1 0 0 1 0 1.414l-2 2a1 1 0 0 1 -1.414 0l-2 -2a1 1 0 0 1 0 -1.414" />
        </G>
      </Svg>
    );
  }

