

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbRelationManyToManyFilled = (props: IconProps) => {

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
          <Path  d="M19 4a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-10a3 3 0 0 1 3 -3zm-3.2 5.4c-.577 -.769 -1.8 -.361 -1.8 .6v4a1 1 0 0 0 1 1l.117 -.007a1 1 0 0 0 .883 -.993v-1l1.2 1.6c.577 .769 1.8 .361 1.8 -.6v-4a1 1 0 0 0 -1 -1l-.117 .007a1 1 0 0 0 -.883 .993v1zm-9 0c-.577 -.769 -1.8 -.361 -1.8 .6v4a1 1 0 0 0 1 1l.117 -.007a1 1 0 0 0 .883 -.993v-1l1.2 1.6c.577 .769 1.8 .361 1.8 -.6v-4a1 1 0 0 0 -1 -1l-.117 .007a1 1 0 0 0 -.883 .993v1zm5.2 3.1a1 1 0 0 0 -1 1v.01a1 1 0 0 0 2 0v-.01a1 1 0 0 0 -1 -1m0 -3a1 1 0 0 0 -1 1v.01a1 1 0 0 0 2 0v-.01a1 1 0 0 0 -1 -1" />
        </G>
      </Svg>
    );
  }

