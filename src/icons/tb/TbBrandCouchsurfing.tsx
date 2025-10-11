

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrandCouchsurfing = (props: IconProps) => {

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
          <Path  d="M3.1 13c3.267 0 5.9 -.167 7.9 -.5c3 -.5 4 -2 4 -3.5a3 3 0 1 0 -6 0c0 1.554 1.807 3 3 4c1.193 1 2 2.5 2 3.5a1.5 1.5 0 1 1 -3 0c0 -2 4 -3.5 7 -3.5h2.9" />
          <Path  d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
        </G>
      </Svg>
    );
  }

